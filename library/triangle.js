class Triangle {
    shape(data) {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    
        <<polygon points="0, 0 150, 200 0, 300" fill="${data.shapeColor}" />
    
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.threeCharacters}</text>
    
         </svg>
        `
    }
}
module.exports = Triangle;