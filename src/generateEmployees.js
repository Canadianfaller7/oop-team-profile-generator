const engineerQuestions = [
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
]

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Enter this intern's name:",
    confirm: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log("Please enter a name.");
          return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is this intern's Employee ID number?",
    confirm: idInput => {
      if (idInput) {
          return true;
      } else {
          console.log("Please enter an Employee ID number.");
          return false;
      }
    } 
  },
  {
    type: 'input',
    name: 'email',
    message: "What is this intern's email address?",
    confirm: emailInput => {
      if (emailInput) {
          return true;
      } else {
          console.log("Please enter an email address.");
          return false;
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
]