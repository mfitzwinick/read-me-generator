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
        message: "What languages are used? (Use space bar to select)",
        name: "languages",
        choices: [
            'HTML', 'CSS', 'Javascript', 'Python'
        ]
    },
    {
        type: "checkbox",
        message: "What languages are used? (Use space bar to select)",
        name: "languages",
        choices: [
            'HTML', 'CSS', 'Javascript', 'Python'
        ]
    },
    {
        type: "checkbox",
        message: "How can would you like users to contribute? (Use space bar to select)",
        name: "contribution-guidelines",
        choices: [
            'Report bugs', 'Suggest Enhancements', 'Pull Requests', 'None'
        ]
    },
        {
            type: "input",
            message: "How should tests be run?",
            name: "tests"
        },
    

    ]).then(function(response){
        let template = `# ${response.title} \n ## Description: \n ${response.description} \n ## Installation: \n ${response.installation} \n ## Instructions: \n ${response.instructions} \n ## Languages: \n ${response.languages}\n ## License: \n ${response.license}\n [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
        ## Contribution Guidelines: \n ${response.contribution-guidelines}\n ### Tests: \n ${response.tests} \n ${'[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)'}`

        fs.writeFile("README.md", template, function(err){
          err  ? console.log(err):console.log("Success!")
        })
    })