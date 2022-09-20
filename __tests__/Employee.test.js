const employee = require("../lib/Employee.js");

describe("Employee Class", () => {
  const a1 = "EmployeeTest";
  const a2 = "1";
  const a3 = "ManagerEmail@gmail.com";
  const a4 = "Employee";

  // create new instance of Employee
  const employeeInstance = new employee(a1, a2, a3, a4);

  it("Employee getName method", () => {
    expect(employeeInstance.getName()).toEqual(a1);
  }),
    it("Employee getId method", () => {
      expect(employeeInstance.getId()).toEqual(a2);
    }),
    it("Employee getEmail method", () => {
      expect(employeeInstance.getEmail()).toEqual(a3);
    }),
    it("Employee getRole method", () => {
      expect(employeeInstance.getRole()).toEqual(a4);
    });
});
