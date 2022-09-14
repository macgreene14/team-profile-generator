inquirer = require("inquirer");

//import local classes
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// import local functions
const generateHTML = require("./src/generateHTML.js");

// create list for storing answers
const employees = [];

// prompt users for inputs for Manager class

function main() {
  // add manager
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Add Manager Name",
      },
      {
        type: "input",
        name: "managerId",
        message: "Add Manager ID",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Add Manager Email",
      },
      {
        type: "input",
        name: "managerOfficeNum",
        message: "Add Manager Office Number",
      },
    ])
    .then((a) => {
      const manager = new Manager(
        a.managerName,
        a.managerId,
        a.managerEmail,
        a.managerOfficeNum
      );
      employees.push(manager);
      console.log("Manager added to roster!");
    })
    .then(() => addEmployee());
}

function addEmployee() {
  // promp users for inputs for other classes or to generate HTML
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Select an option",
        choices: ["Add Engineer", "Add Intern", "Generate HTML"],
      },
    ])
    .then((a) => {
      if (a.action === "Generate HTML") {
        // run function
        generateHTML(employees);
        return; // breaks function
      } else if (a.action === "Add Engineer") {
        //run prompt
        inquirer
          .prompt([
            {
              type: "input",
              name: "engineerName",
              message: "Add Engineer Name",
            },
            {
              type: "input",
              name: "engineerId",
              message: "Add Engineer ID",
            },
            {
              type: "input",
              name: "engineerEmail",
              message: "Add Engineer Email",
            },
            {
              type: "input",
              name: "engineerGithub",
              message: "Add Github URL",
            },
          ])
          .then((a) => {
            const engineer = new Engineer(
              a.engineerName,
              a.engineerId,
              a.engineerEmail,
              a.engineerGithub
            );
            employees.push(engineer);
          })
          .then(() => {
            console.log("Engineer added to roster!");
            addEmployee(); // restart function
          });
      } else if (a.action === "Add Intern") {
        //run prompt
        inquirer
          .prompt([
            {
              type: "input",
              name: "internName",
              message: "Add Intern Name",
            },
            {
              type: "input",
              name: "internId",
              message: "Add Intern ID",
            },
            {
              type: "input",
              name: "internEmail",
              message: "Add Intern Email",
            },
            {
              type: "input",
              name: "internSchool",
              message: "Add School",
            },
          ])
          .then((a) => {
            const intern = new Intern(
              a.internName,
              a.internId,
              a.internEmail,
              a.internSchool
            );
            employees.push(intern);
          })
          .then(() => {
            console.log("Intern added to roster!");
            addEmployee(); // restart function
          });
      }
    });
}

// run main function
main();
