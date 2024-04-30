{/* <svg height="30" width="200" xmlns="http://www.w3.org/2000/svg">

    <text x="5" y="30" fill="white" font-size ="35"> SVG </text>
</svg> */}

class Svg {
    //person will pick font size and fill
    constructor(font, fill, text) {
        this.font = font,
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
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <rect width="200" height="200" style="fill:${this.fill}" /> <text x="150" y="125" style="font-size: ${this.fontSize}px; text-anchor: middle">${this.text}</text> </svg>`;}
    }

    module.exports = {
    Text
}