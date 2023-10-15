// Import 3 classes, one for each shape
const Circle = require('./circle')
const Square = require('./square')
const Triangle = require ('./triangle')

// This function generates the SVG file based on user selection of shape. Data will be 
// pushed into the class function shape()
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