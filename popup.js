// popup.js

// Function to update the popup HTML content with the input count
const updatePopup = (inputCount) => {
  const inputCountElement = document.getElementById("inputCount");
  inputCountElement.textContent = `${inputCount}`;
};

// Message listener to receive the count from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.inputCount !== undefined) {
    updatePopup(message.inputCount);
  }
});
