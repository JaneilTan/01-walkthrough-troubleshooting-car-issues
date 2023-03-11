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
});

  it("should reply with the correct response for: yes, no", () => {
    // Input: "yes"
    const reply1 = getReply("yes");
    // Output: "Are the battery terminals corroded?"
    const expectedReply1 = "Are the battery terminals corroded?";

    expect(reply1).toEqual(expectedReply1);

    // Input: "yes"
    const reply2 = getReply("no");
    // Output: "Replace cables and try again"
    const expectedReply2 = "Replace cables and try again";
    
    // Uncomment the following line and update your actual reply with your expected reply
    expect(reply2).toEqual(expectedReply2);
  });

  it("should reply with the correct response for: yes, no", () => { 
    // Input: "no"
    const reply1 = getReply("no");
    // Output: "Does the car make a clicking noise?"
    const expectedReply1 = "Does the car make a clicking noise?";

    expect(reply1).toEqual(expectedReply1);

    // Input: "yes"
    const reply2 = getReply("yes");
    // Output: "Replace the battery"
    const expectedReply2= "Replace the battery";

    expect(reply2).toEqual(expectedReply2);
  });

  it("should reply with the correct response for: no, no, yes", () => { 
    // Input: "no"
    const reply1 = getReply("no");
    // Output: "Does the car make a clicking noise?"
    const expectedReply1 = "Does the car make a clicking noise?";

    expect(reply1).toEqual(expectedReply1);

    // Input: "no"
    const reply2 = getReply("no");
    // Output: "Does the car crank up but fail to start?"
    const expectedReply2 = "Does the car crank up but fail to start?";

    expect(reply2).toEqual(expectedReply2);

    // Input "yes"
    const reply3 = getReply("yes");
    // Output: "Check spark plug connections"
    const expectedReply3 = "Check spark plug connections";

    expect(reply3).toEqual(expectedReply3);
  });

  it("should support uppercase YES", () => { 
    // Input: "YES"
    const reply1 = getReply("YES");
    // Output: "Are the battery terminals corroded?"
    const expectedReply1 = "Are the battery terminals corroded?";
    expect(reply1).toEqual(expectedReply1);
    // Input: "YES"
    const reply2 = getReply("YES");
    // Output: "Clean terminals and try starting again"
    const expectedReply2 = "Clean terminals and try starting again";
    expect(reply2).toEqual(expectedReply2);
  });
  