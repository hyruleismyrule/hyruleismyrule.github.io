// Task array, Task Name and Completed
let tasks = [];
let tasksString = localStorage.getItem("tasks");
if (tasksString !== null) {
    tasks = JSON.parse(tasksString);
}
let filterType = "all";
// Show what's in the array
// console.log(tasks);
// The Element where I want to put the array
let taskContainer = document.getElementById("task-container");
refreshList();
// Add a task to the array
function addTask() {
    let newTask = document.getElementById("add-task").value;
    tasks.push([newTask, true]);
    updateLocal();
    refreshList();
}
function filter(filterTypeParamater) {
    filterType = filterTypeParamater;
    refreshList();
}
function refreshList() {
    document.getElementById("task-container").remove();
    let listContainer = document.getElementById("list-container");
    taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", "task-container");
    listContainer.prepend(taskContainer);
    let tasksToDisplay = [];
    if (filterType == "active") {
        tasksToDisplay = tasks.filter(element => element[1]);
    }
    else if (filterType == "completed") {
        tasksToDisplay = tasks.filter(element => !element[1]);
    }
    else {
        tasksToDisplay = tasks;
    }
    for (let i = 0; i < tasksToDisplay.length; i++) {
        let listItem = document.createElement("div");
        // Check for Complete
        let description = tasksToDisplay[i][0];
        let completed = tasksToDisplay[i][1];
        if (completed) {
            listItem.innerHTML = "<input onclick='toggleCheck(" + i + ")' type='checkbox'><div>" + description + "</div><div  class='close-container'><i onclick='deleteTask(" + i
                + ")' class='fas fa-times'></div>";
        } 
        else {
            listItem.innerHTML = "<input onclick='toggleCheck(" + i + ")' type='checkbox' checked='true'><div class='complete'>" + description
                + "</div><div  class='close-container'><i onclick='deleteTask(" + i + ")' class='fas fa-times'></div>";
        }
        taskContainer.appendChild(listItem);
    }
    let tasksLeft = countTasksLeft();
    // Show how many tasks are left, complete, and total
    document.getElementById("tasksLeft").innerText = tasksLeft;
    document.getElementById("tasksComplete").innerText = tasks.length - tasksLeft;
    document.getElementById("tasksAll").innerText = tasks.length;
}
// Count tasks left
function countTasksLeft() {
    let tasksCount = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i][1]) {
            tasksCount++;
        }
    }
    return tasksCount;
}
// Check or unckeck
function toggleCheck(i) {
    tasks[i][1] = !tasks[i][1];
    updateLocal(); 
    refreshList();
}
// Delete on click of X
function deleteTask(i) {
    tasks.splice(i, 1);
    updateLocal(); 
    refreshList();
}
function updateLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Get the input field
let input = document.getElementById("add-task");
// When user hits enter on input add task
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("enter-button").click();
    input.value = "";
  }
});
