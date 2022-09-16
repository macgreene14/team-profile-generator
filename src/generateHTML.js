fs = require("fs");

function generateHTML(employees) {
  // accepts list of classes, generate cards, insert into template, save local
  console.log(employees);

  let cardStack = "";

  // construct cards, iterate through key and value
  // for (let employee of employees) {
  //   let info = `<p class="card-header">${employee.constructor.name}</p>`;
  //   for (const [key, value] of Object.entries(employee)) {
  //     info = info + `<p class="card-content">${key}: ${value}</p>`;
  //   }
  //   let card = `
  //   <div style="margin:2%;" class="card">
  //       ${info}
  //   </div>`;
  //   cardStack = cardStack + card;
  // }

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
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <div class="media-content">
                  <p class="title is-4">${employee.name}</p>
                  <p class="subtitle is-6">${employee.constructor.name}</p>
                </div>
                <div class="content">
                  Employee ID: ${employee.name}
                  <br>
                  Email: <a href="#">${employee.email}</a>
                  <br>
                  Office Number: ${employee.officeNumber} 
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
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <div class="media-content">
                  <p class="title is-4">${employee.name}</p>
                  <p class="subtitle is-6">${employee.constructor.name}</p>
                </div>
                <div class="content">
                  Employee ID: ${employee.name}
                  <br>
                  Email: <a href="#">${employee.email}</a>
                  <br>
                  Github: <a href="${employee.github}">${employee.github}</a>
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
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                <div class="media-content">
                  <p class="title is-4">${employee.name}</p>
                  <p class="subtitle is-6">${employee.constructor.name}</p>
                </div>
                <div class="content">
                  Employee ID: ${employee.name}
                  <br>
                  Email: <a href="#">${employee.email}</a>
                  <br>
                  Office school: ${employee.school} 
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
        }
        #cardContainer {
          width: 100%;
          height: 100vh;
          background-color: blue;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-evenly;
          padding: 10%;
          align-content: stretch;
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
