const generateManager = manager => {
    return `<section class="card col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a target="_blank" href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
          </section>
`;
}

// create Engineer card
const generateEngineer = engineer => {
  return `<section class="card col-4 mt-4">
            <div class="card h-100">
              <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
              </div>
              <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a target="_blank" href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
              </div>
            </div>
          </section>
`;
}

// create Intern card 
const generateIntern = intern => {
  return `<section class="card col-4 mt-4">
            <div class="card h-100">
              <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
              </div>
              <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a target="_blank" href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
              </div>
            </div>
          </section>
  `;
}

const generateHTML = data => {
  htmlCardArray = []; 
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole(); 
    // call manager function
    if (role === 'Manager') {
      const managerCard = generateManager(employee);
      htmlCardArray.push(managerCard);
    }
    // call engineer function
    if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);
      htmlCardArray.push(engineerCard);
    }
    // call intern function 
    if (role === 'Intern') {
      const internCard = generateIntern(employee);
      htmlCardArray.push(internCard);
    }
  }
  const employeeCards = htmlCardArray.join('')

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;
}

// generate html page 
const generateTeamPage = employeeCards => {   
  return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>
        My Team Profile
      </h1>
    </header>
    <main>
      <section class="container">
        <div class="row justify-content-center" id="team-cards">
          ${employeeCards}
        </div>
      </section>
    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html>
`;
}

// export to index
module.exports = generateHTML;