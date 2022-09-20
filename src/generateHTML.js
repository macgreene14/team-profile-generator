fs = require("fs");

function generateHTML(employees) {
  // accepts list of classes, generate cards, insert into template, save local
  console.log(employees);

  let cardStack = "";

  // generate card based on employee type
  for (let employee of employees) {
    if (employee.constructor.name === "Manager") {
      // name, id, email, office number
      let card = `
      <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://www.svgrepo.com/show/92072/manager.svg" alt="Placeholder image">
                </figure>
                <div class="media-content">
                  <p class="title is-4">${employee.getName()}</p>
                  <p class="subtitle is-6">${employee.constructor.name}</p>
                </div>
                <div class="content">
                  Employee ID: ${employee.getId()}
                  <br>
                  Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a>
                  <br>
                  Office Number: ${employee.getOfficeNumber()} 
                </div>
            </div>  
          </div>
        </div>
      </div>`;
      cardStack += card;
    } else if (employee.constructor.name === "Engineer") {
      // name, id, email, github
      let card = `
      <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://www.svgrepo.com/show/203540/engineer-worker.svg" alt="Placeholder image">
                </figure>
                <div class="media-content">
                  <p class="title is-4">${employee.getName()}</p>
                  <p class="subtitle is-6">${employee.constructor.name}</p>
                </div>
                <div class="content">
                  Employee ID: ${employee.getId()}
                  <br>
                  Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a>
                  <br>
                  Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>
                </div>
            </div>  
          </div>
        </div>
      </div>`;
      cardStack += card;
    } else if (employee.constructor.name === "Intern") {
      // name, id, email, school
      let card = `
      <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://www.svgrepo.com/show/64796/student-woman.svg" alt="Placeholder image">
                </figure>
                <div class="media-content">
                  <p class="title is-4">${employee.getName()}</p>
                  <p class="subtitle is-6">${employee.constructor.name}</p>
                </div>
                <div class="content">
                  Employee ID: ${employee.getId()}
                  <br>
                  Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a>
                  <br>
                  Office school: ${employee.getSchool()} 
                </div>
            </div>  
          </div>
        </div>
      </div>`;
      cardStack += card;
    }
  }

  // construct HTML template, insert cards
  const template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <style>
        #card {
          border-style: solid;
          margin: 50px;
          width: 100%;

        }
        #cardContainer {
          width: 100%;
          height: 100vh;
          background-color: blue;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-evenly;
          padding: 50px;
          align-content: stretch;
        }
        .navbar-brand {
          text-align: center;
          display: block;
          width: 100%;
        }
      </style>
  </head>
  <body>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
      <h1 class="title is-1 is-spaced">Team Profile Generator</h1>
      </div>
    </nav>
    <div id="cardContainer">
      ${cardStack}
    </div>    
  </body>
  </html>
  `;

  fs.writeFile("./TeamProfile.html", template, (err) =>
    err ? console.log("Error writing to file") : console.log("Created file")
  );
}

module.exports = generateHTML;
