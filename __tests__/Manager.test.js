const manager = require("../lib/Manager.js");

describe("Manager Class", () => {
  const a1 = "ManagerTest";
  const a2 = "1";
  const a3 = "ManagerEmail@gmail.com";
  const a4 = "140";

  // create new instance of Manager
  const ManagerInstance = new manager(a1, a2, a3, a4);

  it("Manager getName method", () => {
    expect(ManagerInstance.getName()).toEqual(a1);
  }),
    it("Manager getId method", () => {
      expect(ManagerInstance.getId()).toEqual(a2);
    }),
    it("Manager getEmail method", () => {
      expect(ManagerInstance.getEmail()).toEqual(a3);
    }),
    it("Manager getOfficeNumber method", () => {
      expect(ManagerInstance.getOfficeNumber()).toEqual(a4);
    }),
    it("Manager getRole method", () => {
      expect(ManagerInstance.getRole()).toEqual("Manager");
    });
});
