
// function saveTask() {
//     let toDoListContainer = document.getElementById("add-task");
//     localStorage.setItem(toDoList);

//     let toDoListItem = localStorage.getItem(toDoList);
//     let toDoListHTML = ` 
//     <div class="list-item">
//         <input type="checkbox">
//         <p>${toDoListItem}</p>
//         <i class="fas fa-times"></i>
//     </div>
// `;
//     document.getElementById("list-container").value = toDoListHTML;
// }

// window.addEventListener("load", () => {
//     // let storyName = document.getElementById("name_input").value;
//     let taskHTML = localStorage.getItem(task);
//     document.getElementById("list-container").value = taskHTML;
// });

// function saveTask() {
//     task = document.getElementById("add-task").value;
//     localStorage.setItem(task, task);
//     taskHTML = localStorage.getItem(task);
//     document.getElementById("list-container").value = taskHTML;
// }

// Create Array
let activeTasks = ["Assignment 3", "Assignment 4"];
let completeTasks = ["Assignment 1", "Assignment 2"];
let tasks = activeTasks.concat(completeTasks);
// Show what's in the array
console.log(tasks);
// Show what's in active tasks
console.log(activeTasks);
// Show what's in complete tasks
console.log(completeTasks);
// The Element where I want to put the array
let taskContainer = document.getElementById("task-container");
// Create a list item in the HTML with each element from the array
for (let i = 0; i < activeTasks.length; i++) {
    let listItem = document.createElement("div");
    listItem.innerHTML = "<input type='checkbox'><div>" + activeTasks[i] + "</div><i class='fas fa-times'>";
    taskContainer.appendChild(listItem);
}
for (let i = 0; i < completeTasks.length; i++) {
    let listItem = document.createElement("div");
    listItem.innerHTML = "<input type='checkbox' checked='true'><div class='complete'>" + completeTasks[i] + "</div><i class='fas fa-times'>";
    taskContainer.appendChild(listItem);
}
// Show what's in active tasks
console.log(activeTasks);
// Show how many tasks are left to do
document.getElementById("tasksLeft").innerText = activeTasks.length;
