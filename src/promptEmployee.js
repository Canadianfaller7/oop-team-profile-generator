const inquirer = require('inquirer')

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
                break;
            case 'add intern information':
                internPrompt();
                break;
            case 'finish building the team':
                finishedTeam();
        }
    });
};

module.exports = promptMenu;
