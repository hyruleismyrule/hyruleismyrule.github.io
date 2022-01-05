//  Load Story
function loadStory() {
  let storyName = document.getElementById("name_input").value;
  let storyHTML = localStorage.getItem(storyName);
  document.getElementById("story_editor").value = storyHTML;
}
// Save Story
function saveStory() {
  let storyName = document.getElementById("name_input").value;
  let storyHTML = document.getElementById("story_editor").value;
  localStorage.setItem(storyName, storyHTML);
}
// Display Story
function displayStory() {
  let storyName = document.getElementById("name_input").value;
  let storyHTML = document.getElementById("story_editor").value;
  document.getElementById("name_display").innerHTML = storyName;
  document.getElementById("story_display").innerHTML = storyHTML;
}