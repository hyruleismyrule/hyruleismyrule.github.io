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
// Delete Story
function deleteStory() {
  let storyName = document.getElementById("name_input").value;
  localStorage.removeItem(storyName);
}
// Delete all Stories
function deleteStories() {
  localStorage.clear();
}
// Show Saved Stories
function showStories() {
  for (let i = 0; i < localStorage.length; i++) {
    let savedStories = localStorage.key(i);
    let listItem = document.createElement("p").innerHTML = savedStories + ", ";
    let listParent = document.getElementById("saved_list");
    listParent.append(listItem);
    document.getElementById("saved_title").textContent = "My Stories";
    console.log(savedStories);
  }
}