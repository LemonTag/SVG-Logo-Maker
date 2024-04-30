const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Text } = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

const shapeChoices = [
    { name: 'circle', value: 'circle' },
    { name: 'triangle', value: 'triangle' },
    { name: 'square', value: 'square' }
];

class CLI {
    run() {
        //made a list so you can pick of each shape
        return inquirer
            .prompt([{
                type: 'list',
                name: 'shape',
                message: 'What shape do you want?',
                choices: shapeChoices
            },
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text to include in the SVG:',
                validate: function (value) {
                    return value.trim().length > 0 ? true : 'Please enter some text.';
                }
            }])
            .then(answers => {
                console.log("Here are the answers:", answers);

                
                const text = new Text();

                // Set common properties for shapes and text
                text.setFill('white');
                text.setFont('60');
                text.setText(answers.text);
                let shape;

                // Create a shape based on user choice
                switch (answers.shape) {
                    case 'circle':
                        shape = new Circle();
                        break;
                    case 'triangle':
                        shape = new Triangle();
                        break;
                    case 'square':
                        shape = new Square();
                        break;
                    default:
                        console.error('Invalid shape choice');
                        return;
                }

                // Set color for the shape
                shape.setColor('green');
                
                const svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> ${shape.render()}${text.render()} </svg>`;
                console.log(svgString)
                return writeFile('logo.svg', svgString);
            })
            .then(() => {
                console.log('File saved as logo.svg');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

module.exports = CLI;
