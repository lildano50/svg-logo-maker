//This class has a shape function that will return a circle shape.
//color and text will be fed into the shape.

class Circle {
    shape(data) {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
    
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.threeCharacters}</text>
    
         </svg>
        `
    }
}
module.exports = Circle;