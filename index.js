// Includes packages/imports needed for program
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require ('../svg-logo-maker/library/generateSVG');

// Used to restrict character input to 3 characters
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// Array of questions to be generated
const questions = [
    {
        type: 'maxlength-input',
        message: "Enter 3 characters: ",
        name: 'threeCharacters',
        maxLength: 3,        
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
