const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { Text } = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");

const shapeChoices = [
    { name: 'circle', value: 'circle' },
    { name: 'triangle', value: 'polygon' },
    { name: 'square', value: 'rect' }
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
                text.setFill('green');
                text.setFont('sans');
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

                const svgString = `${shape.render()}${text.render()}`;

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
