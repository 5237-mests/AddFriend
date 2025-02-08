// Get references to the HTML elements
const widgetContent = document.getElementById("widgetContent");
const saveButton = document.getElementById("saveButton");

// Load saved widget content when the popup opens
chrome.storage.sync.get(["widgets"], (result) => {
  if (result.widgets) {
    widgetContent.value = result.widgets.join("\n");
  }
});

// Save custom widget content when the user clicks "Save"
saveButton.addEventListener("click", () => {
  const content = widgetContent.value
    .split("\n")
    .filter((line) => line.trim() !== "");
  chrome.storage.sync.set({ widgets: content }, () => {
    console.log("Widget content saved:", content);
    alert("Settings saved! Refresh the page to see changes.");
  });
});
