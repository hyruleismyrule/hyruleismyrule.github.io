// // Create Array
// let activeTasks = ["Assignment 3", "Assignment 4", "Assignment 5"];
// let completeTasks = ["Assignment 1", "Assignment 2"];
// let tasks = activeTasks.concat(completeTasks);
// // Show what's in the array
// console.log(tasks);
// // Show what's in active tasks
// console.log(activeTasks);
// // Show what's in complete tasks
// console.log(completeTasks);
// // The Element where I want to put the array
// let taskContainer = document.getElementById("task-container");
// // Create a list item in the HTML with each element from the array
// for (let i = 0; i < activeTasks.length; i++) {
//     let listItem = document.createElement("div");
//     listItem.innerHTML = "<input type='checkbox'><div>" + activeTasks[i] + "</div><i class='fas fa-times'>";
//     taskContainer.appendChild(listItem);
// }
// for (let i = 0; i < completeTasks.length; i++) {
//     let listItem = document.createElement("div");
//     listItem.innerHTML = "<input type='checkbox' checked='true'><div class='complete'>" + completeTasks[i] + "</div><i class='fas fa-times'>";
//     taskContainer.appendChild(listItem);
// }
// // Show what's in active tasks
// console.log(activeTasks);
// // Show how many tasks are left to do
// document.getElementById("tasksLeft").innerText = activeTasks.length;
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
        // Check for Complete
        if (tasks[i][1] == true) {
            let listItem = document.createElement("div");
            listItem.innerHTML = "<input type='checkbox'><div>" + tasks[i][0] + "</div><i class='fas fa-times'>";
            taskContainer.appendChild(listItem);
        }
        if (tasks[i][1] == false) {
            let listItem = document.createElement("div");
            listItem.innerHTML = "<input type='checkbox' checked='true'><div class='complete'>" + tasks[i][0] + "</div><i class='fas fa-times'>";
            taskContainer.appendChild(listItem);
        }
    }
    // Show how many tasks are left to do
    document.getElementById("tasksLeft").innerText = countTasksLeft();
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