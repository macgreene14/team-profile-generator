const intern = require("../lib/Intern.js");

describe("Intern Class", () => {
  const a1 = "InternTest";
  const a2 = "1";
  const a3 = "ManagerEmail@gmail.com";
  const a4 = "SchoolName";

  // create new instance of Intern
  const internInstance = new intern(a1, a2, a3, a4);

  it("Intern getName method", () => {
    expect(internInstance.getName()).toEqual(a1);
  }),
    it("Intern getId method", () => {
      expect(internInstance.getId()).toEqual(a2);
    }),
    it("Intern getEmail method", () => {
      expect(internInstance.getEmail()).toEqual(a3);
    }),
    it("Intern getSchool method", () => {
      expect(internInstance.getSchool()).toEqual(a4);
    }),
    it("Intern getRole method", () => {
      expect(internInstance.getRole()).toEqual("Intern");
    });
});
