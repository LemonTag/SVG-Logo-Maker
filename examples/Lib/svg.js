{/* <svg height="30" width="200" xmlns="http://www.w3.org/2000/svg">

    <text x="5" y="30" fill="white" font-size ="35"> SVG </text>
</svg> */}

class Svg {
    //person will pick font size and fill
    constructor(fontSize, fill, text) {
        this.fontSize = fontSize,
        this.fill = fill,
        this.text = text
    }
    //when person pick setFont size the system keep the font size
    setFont(fontSize) {
        this.fontSize = fontSize;
    }

    setFill(fill) {
        this.fill = fill;
    }
    setText(text) {
        this.text = text;
    }

}

class Text extends Svg {
    render() {
        //Use font properties set in Svg class
        return `<text x="150" y="125" font-size="${this.fontSize}" fill="${this.fill}" text-anchor="middle">${this.text}</text>`;}
    }

    module.exports = {
    Text
}