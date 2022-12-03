const inquirer = require('inquirer');
const Engineer = require('../../lib/Engineer');
const Intern = require('../../lib/Intern');

const myTeamArray = []

const promptMenu = () => {
  return inquirer.prompt([
      {
          type: 'list',
          name: 'choices',
          message: 'What would you like to do next?',
          choices: ['add engineer information', 'add intern information', 'finish building the team']
      }
  ]).then(choice => {
      switch (choice.choices) {
          case 'add engineer information':
              engineerPrompt();
              myTeamArray.push(engineerPrompt);
              console.log(myTeamArray);
              break;
          case 'add intern information':
              internPrompt();
              myTeamArray.push(internPrompt);
              console.log(myTeamArray);
              break;
          case 'finish building the team':
              finishedTeam();
          default:
            console.log('Sorry an error has occurred, please try again.');
            break;
      }
  });
};


const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter this engineer's name:",
            confirm: nameInput => {
                if (!nameInput) {
                    console.log("Please enter a name.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this engineer's Employee ID number?",
            confirm: idInput => {
                if (!idInput) {
                    console.log("Please enter an Employee ID number.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this engineer's email address?",
            confirm: emailInput => {
                if (!emailInput) {
                    console.log("Please enter an email address.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's github username?",
            confirm: githubInput => {
                if (!githubInput) {
                    console.log("Please enter a github username.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        myTeamArray.push(engineer);
        promptMenu();
    })
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter this intern's name:",
            confirm: nameInput => {
                if (!nameInput) {
                    console.log("Please enter a name.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this intern's Employee ID number?",
            confirm: idInput => {
                if (!idInput) {
                    console.log("Please enter an Employee ID number.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this intern's email address?",
            confirm: emailInput => {
                if (!emailInput) {
                    console.log("Please enter an email address.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is this intern attending?",
            confirm: schoolInput => {
                if (!schoolInput) {
                    console.log("Please enter the name of a school.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        myTeamArray.push(intern);
        promptMenu();
    })
};

exports.myTeamArray = myTeamArray;
exports.promptMenu = promptMenu;
exports.engineerPrompt = engineerPrompt;
exports.internPrompt = internPrompt;
