const inquirer = require('inquirer');
const createManager = require('./src/generateManager')
const createEmployee = require('./src/generateEmployees')
const addTeamMembers = require('./src/promptEmployee')

const { writeFile } = require('fs').promises;

const myTeamArray = []

const init = async () => {

  const manager = await inquirer.prompt(createManager)
  .then(answers => createManager(answers));
  myTeamArray.push(manager);

  console.log('Please start adding your employees!');

  




//     .then((answers) => writeFile('./dist/index.html', generateHTML()))
//     .then(() => console.log('Successfully wrote index.html file!'))
//     .catch(err => console.log(err));
};

init();
