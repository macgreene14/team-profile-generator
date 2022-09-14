// Extends Employee class
const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    console.log(this.officeNumber);
    return this.officeNumber;
  }

  getRole() {
    console.log("Manager");
    return "Manager";
  }
}
module.exports = Manager; // export class
