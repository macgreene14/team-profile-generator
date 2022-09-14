// Extends Employee class
import Employee from "./Employee.js";

export class Manager extends Employee {
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
