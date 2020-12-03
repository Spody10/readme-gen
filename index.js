const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { title } = require('process');


// array of questions for user
const questions = [
    
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'website',
        message: 'Please provide a link to your published website: (Required)',
        validate: websiteInput => {
            if (websiteInput) {
                return true;
            } else {
                console.log('Please provide your published website link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Please provide a link to your repository: (Required)',
        validate: repositoryInput => {
            if (repositoryInput) {
                return true;
            } else {
                console.log('Please provide your repository link.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter information about yourself to be added to an "About" section?',
        default: true  
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself: ',
        when: ({confirmAbout}) => {
            if (confirmAbout) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a detailed description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a detailed description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'use',
        message: 'Please provide information on how to use this project. (Required)',
        validate: (confirmUse) => {
            if (confirmUse) {
                return true;
            } else { 
                console.log('Please enter intructions.')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['HTML', 'CSS', 'Javascript', 'Node', 'jQuery', 'Other',],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any contributors to the project here: (COMMA SEPARATED)'
    },
    {
        type: 'confirm',
        name: 'confirmTesting',
        message: 'Would you like to enter information about testing to be added to a "Tests" section?',
        default: true  
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter the commands to test the application:',
        when: ({confirmTesting}) => {
            if (confirmTesting) {
                return true;
            } else {
                
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license(s) associated with this project. ',
        choices: ['MIT', 'Apache', 'Boost', 'Eclipse', 'Mozilla', 'IBM', 'None']
    },

];



// function to initialize program
const init = () => {
    return inquirer.prompt(questions);
};

// function call to initialize program
init()
.then(rmData => {
    return generateMarkdown(rmData);
})
.then(generateResponse => {
    console.log('You successfully created created your README. Check it out in the RM-output folder!')
    return writeToFile('./RM-output/README.md', generateResponse);
});
// function to write README file
function writeToFile(fileName, data) {
    console.log("README Generating...")
    fs.writeFile(fileName, data, err => {
        if (err) {console.log(err);
        return;
        }
    })
}
