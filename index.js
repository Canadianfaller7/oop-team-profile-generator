const inquirer = require("inquirer");
const createManager = require("./src/makeEmployeeObjects/makeManager")
const managerQuestions = require("./src/generateManager");
const generateHTML = require("./src/generateHTML")
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 

const myTeamArray = []

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
        }else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the employee's id:",
      validate: nameValue => {
        if(isNaN(nameValue)) {
          console.log("Please put in the employee's id #.");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the employee's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (!valid) {
          console.log ('Please enter an email!')
          return false;
        } else {
          return true;
        }
      }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: nameInput => {
            if (!nameInput ) {
                console.log ("Please enter the employee's github username!")
              return false;
            } else {
              return true;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter the intern's school!")
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more team members?',
        default: false
    }
  ])
  
  .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        myTeamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(myTeamArray); 
        } else {
            return myTeamArray;
        }
  })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./output/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

init()
  .then(promptEmployee)
  .then(myTeamArray => {
    return generateHTML(myTeamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });