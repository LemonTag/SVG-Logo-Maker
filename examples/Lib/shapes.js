
{/* <svg
    width="200"
    height="200"
    viewBox="-100 -100 200 200"
>
    <circle cx="0" cy="20" r="70" fill="green" />

    <rect x="-50" y="-50" rx="0" width="100" height="100" fill="green" />

    <polygon points="-5,-10 -50, 100 60, 100" fill="green" />

    <text x="0" y="0" font-size="30" text-anchor="middle" fill="white">SVG</text>
</svg> */}
class Shape {
    //person will pick color
    //the color is the shape
    constructor() {
        this.color = "";

    }
    //when person pick set color the system keep the color
    setColor(color) {
        this.color=color;
    }
}

class Circle extends Shape {
    //when the person picks the shape 
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="-5,-10 -50, 100 60, 100" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    //Use font properties set in Svg class
    render(){
        return `<rect x="-50" y="-50" rx="0" width="100" height="100" fill="${this.color}"/>`
    }
}
module.exports = {
    Circle, Triangle, Square
}