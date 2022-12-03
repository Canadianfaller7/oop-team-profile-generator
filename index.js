const inquirer = require("inquirer");
const createManager = require("./src/makeEmployeeObjects/makeManager")
const managerQuestions = require("./src/generateManager");
const {engineerPrompt,internPrompt,promptMenu, myTeamArray} = require("./src/makeEmployeeObjects/promptEmployees")
const generateHTML = require("./src/generateHTML")
// const createEmployee = require("./src/generateEmployees")
// const addTeamMembers = require("./src/promptEmployee")

const init = async () => {

  console.log("\nWelcome to the team profile generator! Please start by adding the Manager's information.\n");

  const manager = await inquirer.prompt(managerQuestions)
  .then(answers => createManager(answers));
  myTeamArray.push(manager);
  console.log(myTeamArray);

  console.log("\nPlease start adding your employees!\n");
};

  const promptEmployee = () => {
    return inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee:",
        choices: ["Engineer", "Intern"]
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
        validate: nameValue => {
          if(!nameValue) {
            console.log("Please enter in the employee's name.");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's id:"
      }

    ])
  }

const writeHTML = data => {
  fs.writeFile("../output/index.html", data, err => {
    if(err) {
      console.log(err);
      return;
    }else {
      console.log("You have finished building your team and your HTML file is now in the output folder!");
    }
  })
}

init();
.then(myTeamArray => {
  return generateHTML(myTeamArray);
})
.then(myHTML => {
  return writeHTML(myHTML)
})
