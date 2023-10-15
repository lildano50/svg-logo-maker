// Includes packages/imports needed for program
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require ('../svg-logo-maker/library/generateSVG');

// Array of questions to be generated
const questions = [
    {
        type: 'input',
        message: "Enter 3 characters: ",
        name: 'threeCharacters',
    },
    {
        type: 'input',
        message: "Enter a text color: ",
        name: "textColor",
    },
    {
        type: 'list',
        message: "Enter a shape from options below: ",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: 'input',
        message: "Enter the shape color: ", 
        name: "shapeColor"
    }
];

// Function to initialize application
function init(promptQuestions){
    inquirer
        .prompt(promptQuestions)
        .then((response) =>
            fs.writeFile('logo.svg', generateSVG(response), (err) =>
            err ? console.error(err) : console.log('Generated logo.svg')
));
}

// Function call to initialize app
init(questions);
