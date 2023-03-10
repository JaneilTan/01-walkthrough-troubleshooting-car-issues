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
  it("should reply with [PUT YOUR DESCRIPTION HERE]", () => {
    const reply1 = getReply("yes");
    const expectedReply1 = "";

    // Uncomment the following line and update your actual reply with your expected reply
    // expect(reply1).toEqual(expectedReply1);
  });
});
