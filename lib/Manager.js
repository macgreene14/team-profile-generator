// Extends Employee class
const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager; // export class
