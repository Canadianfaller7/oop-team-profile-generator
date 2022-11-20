const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const generateHTML = () => {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Team Proflie Generator</title>
          <link rel="stylesheet" href="./dist/styles.css">
      </head>
      <body>
          
      </body>
    </html>`
}

const init = () => {
  questions()
    .then((answers) => writeFile('index.html', generateHTML()))
    .then(() => console.log('Successfully wrote index.html file!'))
    .catch(err => console.log(err));
};

init();
