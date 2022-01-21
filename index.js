// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (resp) =>
`
# ${resp.name}
## Description
${resp.description}
## Table of content
${resp.contents} \n
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#contribute)
- [Tests](#tests) \n
## Installation
${resp.installation}
## Usage
${resp.usage}
## Credits
${resp.contributors}
## License
${resp.license}
------
## Badges
${resp.badges}
## Features
${resp.features}
## How to Contribute
${resp.contribute}
## Tests
${resp.tests}
`;

// TODO: Create an array of questions for user input
// const questions = ()=>{
//     return 
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the file? ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description of the project: ',
  },
  {
    type: 'input',
    name: 'contents',
    message: 'Brief description of contents:  ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation requirements: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is your project used for? ',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Name of contributors: ',
  },
  {
    type: 'list',
    name: 'license', 
    choices: [
        'GNU_AGPLv3',
        'GNU_GPLv3',
        'Mozilla',
        'Apache',
        'MIT',
        'Boost',
        'The_unlicense'],
    message: 'Choose a license for your project (only pick one).' 
  },
  {
    type: 'input',
    name: 'badges',
    message: 'Badges: ',
  },
  {
    type: 'input',
    name: 'features',
    message: 'If your project has a lot of features, list them here: ',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How to Contribute: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write tests for your application: ',
  },
])
   .then((answers) => {
    const filePageContent = generateREADME(answers);

    fs.writeFile('README2.md', filePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readMe file!')
    );
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}
    

// TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions)
    // .then((inquirerResponse, data) => {   
    //     console.log("Making ReadMe");
    //     fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
}

// Function call to initialize app
// init()
