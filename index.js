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
        message: "How can would you like users to contribute? (Use space bar to select)",
        name: "contributionguidelines",
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
        let template = `# ${response.title} \n [![forthebadge](https://forthebadge.com/images/badges/made-with-markdown.svg)](https://forthebadge.com)\n ## Description: \n ${response.description} \n [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) \n ## Installation: \n ${response.installation} \n [![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com) \n ## Instructions: \n ${response.instructions} [![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com) \n ## Languages: \n ${response.languages}\n [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) \n ## License: \n ${`response.license`}\n [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) \n ## Contribution Guidelines: \n ${response.contributionguidelines}\n ### Tests: \n ${response.tests} \n [![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebaadge.com)`
        
        fs.writeFile("README.md", template, function(err){
          err  ? console.log(err):console.log("Success!")
        })
    })