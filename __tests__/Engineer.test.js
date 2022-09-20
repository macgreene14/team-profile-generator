const engineer = require("../lib/Engineer.js");

describe("Engineer Class", () => {
  const a1 = "EngineerTest";
  const a2 = "1";
  const a3 = "ManagerEmail@gmail.com";
  const a4 = "GithubProfile";

  // create new instance of Engineer
  const engineerInstance = new engineer(a1, a2, a3, a4);

  it("Engineer getName method", () => {
    expect(engineerInstance.getName()).toEqual(a1);
  }),
    it("Engineer getId method", () => {
      expect(engineerInstance.getId()).toEqual(a2);
    }),
    it("Engineer getEmail method", () => {
      expect(engineerInstance.getEmail()).toEqual(a3);
    }),
    it("Engineer getGithub method", () => {
      expect(engineerInstance.getGithub()).toEqual(a4);
    }),
    it("Engineer getRole method", () => {
      expect(engineerInstance.getRole()).toEqual("Engineer");
    });
});
