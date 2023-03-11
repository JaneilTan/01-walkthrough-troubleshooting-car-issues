/**
 *
 * @param {string} userInput A string of the value that is typed into the web form. Example: "yes"
 * @returns {string} The reply which is either the next question or answer. Example "Are the battery terminals corroded?"
 */
let level = 1;

const getReply = (userInput) => {
  if (level === 1) {
    level = 2;
    return "Are the battery terminals corroded?";
  }
  
  if (level === 2) {
    if (userInput === "yes") {
    return "Clean terminals and try starting again";
  }

    if (userInput === "no") {
      return "Replace cables and try again";
    }
  }
};

export { getReply };
