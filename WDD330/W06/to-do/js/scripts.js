// // Converting array to srting
// localStorage.setItem("activeTasks", JSON.stringify(activeTasks));
// localStorage.setItem("completeTasks", JSON.stringify(completeTasks));
// localStorage.setItem("tasks", JSON.stringify(tasks));
// 
// Task array, Task Name and Completed
// Use splice for deletion
let tasks = [
    [ "Assignment 1", true],
    [ "Assignment 2", true],
    [ "Assignment 3", false],
    [ "Assignment 4", false]
];
// Show what's in the array
console.log(tasks);
// The Element where I want to put the array
let taskContainer = document.getElementById("task-container");
refreshList();
// Add a task to the array
function addTask() {
    let newTask = document.getElementById("add-task").value;
    // tasks.push([newTask, false]);
    tasks.push([newTask, true]);
    refreshList();
}

function refreshList() {
    document.getElementById("task-container").remove();
    let listContainer = document.getElementById("list-container");
    taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", "task-container");
    listContainer.prepend(taskContainer);
    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement("div");
        // Check for Complete
        let description = tasks[i][0];
        let completed = tasks[i][1];
        if (completed) {
            listItem.innerHTML = "<input onclick='toggleCheck()' type='checkbox'><div>" + description + "</div><i class='fas fa-times'>";
        } else {
            listItem.innerHTML = "<input onclick='toggleCheck()' type='checkbox' checked='true'><div class='complete'>" + description + "</div><i class='fas fa-times'>";
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
function toggleCheck() {

}
