const generateHTML = require("./src/generateHTML")

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const fs = require('fs'); 
const inquirer = require("inquirer");

const myTeamArray = []

// start of manager prompts 
const makeManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the manager of this team?', 
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please enter the manager's name!");
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the manager's ID.",
      validate: nameInput => {
        if  (isNaN(nameInput)) {
          console.log ("Please enter the manager's ID!")
          return false; 
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log ('Please enter an email!')
          return false; 
        }
      }
    },
  {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the manager's office number",
      validate: nameInput => {
        if  (isNaN(nameInput)) {
          console.log ('Please enter an office number!')
          return false; 
        } else {
          return true;
        }
      }
    }
  ])
  .then(managerInput => {
      const  { name, id, email, officeNumber } = managerInput; 
      const manager = new Manager (name, id, email, officeNumber);

      myTeamArray.push(manager); 
      console.log(manager); 
  })
};

const promptEmployee = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: "Please choose your employee's role",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the employee?", 
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please enter an employee's name!");
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the employee's ID.",
      validate: nameInput => {
        if  (isNaN(nameInput)) {
          console.log ("Please enter the employee's ID!")
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
        if (valid) {
          return true;
        } else {
          console.log ('Please enter an email!')
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the employee's github username.",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput ) {
          return true;
        } else {
          console.log ("Please enter the employee's github username!")
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
      name: 'confirmpromptEmployee',
      message: 'Would you like to add more team members?',
      default: false
    }
  ])
  
  .then(employeeData => {
        // data for employee types 
    let { name, id, email, role, github, school, confirmpromptEmployee } = employeeData; 
    let employee; 

    if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);

      console.log(employee);

    } else if (role === "Intern") {
      employee = new Intern (name, id, email, school);
      console.log(employee);
    }

    myTeamArray.push(employee); 

    if (confirmpromptEmployee) {
      return promptEmployee(myTeamArray); 
    } else {
      return myTeamArray;
    }
  })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
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

makeManager()
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