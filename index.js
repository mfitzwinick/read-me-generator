const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt(
    [{
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },
    {
        type: "input",
        message: "What would you like to put into the description?",
        name: "description"
    },

    {
        type: "input",
        message: "What steps are required for installation?",
        name: "installation"
    },

    {
        type: "input",
        message: "What are the instructions for use?",
        name: "instructions"
    },

    {
        type: "list",
        message: "What licence is this under?",
        name: "license",
        choices: ['MIT', 'ISL', 'Unlicensed']
    },

    {
        type: "checkbox",
        message: "What languages are used?",
        name: "license",
        choices: ['HTML', 'CSS', 'Javascript', 'Python']
    },

    ]).then(function(response){
        let template = `# ${response.title} \n## Description: \n ${response.description} \n ## Installation: \n ${response.installation} \n ## Instructions: \n ${response.instructions} \n ## License: \n ${response.license}\n ${'[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)'}`

        fs.writeFile("README.md", template, function(err){
          err  ? console.log(err):console.log("Success!")
        })
    })