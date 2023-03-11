/**
 *
 * @param {string} userInput A string of the value that is typed into the web form. Example: "yes"
 * @returns {string} The reply which is either the next question or answer. Example "Are the battery terminals corroded?"
 */
let level = 1;
let path;

const getReply = (userInput) => {
  if (level === 1) {
    level = 2;
    if (userInput === "yes") {
      path = "yes";
    return "Are the battery terminals corroded?";
    }
    if (userInput === "no") {
      path = "no";
    return "Does the car make a clicking noise?";
    }
  }
  
  if (level === 2) {
    level = 3;
    if (path === "yes") {
      if (userInput === "yes") {
      return "Clean terminals and try starting again";
    }

      if (userInput === "no") {
        return "Replace cables and try again";
      }
    }
    if (path === "no") {
      if (userInput === "yes") {
      return "Replace the battery";
    }
      if (userInput === "no") {
        return "Does the car crank up but fail to start?";
      }
    }
  }

  if (level === 3) {
    return "Check spark plug connections";
  }
};

export { getReply };
