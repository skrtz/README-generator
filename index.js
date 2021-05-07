function init() {
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const path = require('path');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'Title'
        },
        {
            type: 'input',
            message: 'Enter a description of your project.',
            name: 'Description'
        },
        {
            type: 'input',
            message: 'Enter an installation guide.',
            name: 'Installation'
        },
        {
            type: 'input',
            message: 'How do you use your application?',
            name: 'Usage'
        },
        {
            type: 'list',
            message: 'Choose a license.',
            choices: ['APACHE', 'GNU', 'IBM', 'MIT'],
            name: 'License'
        },
        {
            type: 'input',
            message: 'How do others contribute?',
            name: 'Contributing'
        },
        {
            type: 'input',
            message: 'How do others test your application?',
            name: 'Tests'
        },
        {
            type: 'input',
            message: 'Provide GitHub account name',
            name: 'Github'
        },
        {
            type: 'input',
            message: 'Provide Email',
            name: 'Email'
        }
    ])
    .then((response) => {
        return fs.writeFileSync(path.join(process.cwd(), "README.md"), generateMarkdown(response));
    });

}

// Function call to initialize app
init();


