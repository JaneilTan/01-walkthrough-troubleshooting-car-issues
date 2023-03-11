// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getReply = module.getReply;
    jest.resetModules();
  });
});

describe("getReply", () => {
  it("should reply with the correct response for: yes, yes", () => {
    // Input: "yes"
    const reply1 = getReply("yes");
    // Output: "Are the battery terminals corroded?"
    const expectedReply1 = "Are the battery terminals corroded?";
    // Input: "yes"
    const reply2 = getReply("yes");
    // Output: "Clean terminals and try starting again"
    const expectedReply2 = "Clean terminals and try starting again";

    

    // Uncomment the following line and update your actual reply with your expected reply
    expect(reply1).toEqual(expectedReply1);
  });

  it("should reply with the correct response for: yes, no", () => {
    // Input: "yes"
    const reply1 = getReply("yes");
    // Output: "Are the battery terminals corroded?"
    const expectedReply1 = "Are the battery terminals corroded?";
    // Input: "yes"
    const reply2 = getReply("no");
    // Output: "Replace cables and try again"
    const expectedReply2 = "Replace cables and try again";

    

    // Uncomment the following line and update your actual reply with your expected reply
    expect(reply1).toEqual(expectedReply1);
  });
});
