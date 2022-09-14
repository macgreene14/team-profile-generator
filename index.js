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
  });

// promp users for inputs for other classes or to generate HTML
inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "Select an option",
      choice: ["Add Engineer", "Add Intern", "Generate HTML"],
    },
  ])
  .then((a) => {
    if (a.action === "Generate HTML") {
      // run function
      generateHTML();
    } else if (a.action === "Add Engineer") {
      //run prompt
    } else if (a.action === "Add Engineer") {
      //run prompt
    }
  });
