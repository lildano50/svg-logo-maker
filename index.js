// Includes packages/imports needed for program
const inquirer = require('inquirer');
const fs = require('fs');

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
        type: 'input',
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
            fs.writeFile('logo.svg', /* FILLER */"" , (err) =>
            err ? console.error(err) : console.log('Success!')
));
}

// Function call to initialize app
init(questions);
