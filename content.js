// content.js

// Function to count the number of input elements on the page
const countInputs = () => {
  let inputs = document.getElementsByTagName("input");
  return inputs.length;
};

const inputCount = countInputs();
chrome.runtime.sendMessage({ inputCount });
