// Import 3 classes, one for each shape
const Circle = require('./circle')
const Square = require('./square')
const Triangle = require ('./triangle')


describe('Circle', () => {
    it('should return a circle shape filled with color specified and text/text color specified', () => {
        data = {
            shapeColor: "blue",
            textColor: "white",
            threeCharacters: "DAP"
        }
        const shape = new Circle;
        expect(shape.shape(data)).toEqual(
            `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
    
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.threeCharacters}</text>
    
         </svg>
        `
        )
    });
});

describe('Square', () => {
    it('should return a circle shape filled with color specified and text/text color specified', () => {
        data = {
            shapeColor: "blue",
            textColor: "white",
            threeCharacters: "DAP"
        }
        const shape = new Square;
        expect(shape.shape(data)).toEqual(
            `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <rect x="0" y="0" width="300" height="200" fill="${data.shapeColor}" />
            
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.threeCharacters}</text>
    
        </svg>
        `
        )
    });
});

describe('Triangle', () => {
    it('should return a circle shape filled with color specified and text/text color specified', () => {
        data = {
            shapeColor: "blue",
            textColor: "white",
            threeCharacters: "DAP"
        }
        const shape = new Triangle;
        expect(shape.shape(data)).toEqual(
            `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="0,150 150,0 300,150" fill="${data.shapeColor}" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.threeCharacters}</text>
    
        </svg>
        `
        )
    });
});