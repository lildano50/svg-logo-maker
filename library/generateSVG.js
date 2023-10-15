const Circle = require('./circle')
const Square = require('./square')
const Triangle = require ('./triangle')

// This function generates the skeleton of the SVG file
function generateSVG(data) {
    if (data.shape === "Circle") {
        const shape = new Circle;
        return shape.shape(data);
    } else if (data.shape === "Square") {
        const shape = new Square;
        return shape.shape(data);
    } else {
        const shape = new Triangle;
        return shape.shape(data);
    };
  }
  
  module.exports = generateSVG;