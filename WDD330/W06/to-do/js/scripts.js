
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
let tasks = ["Assignment 1"];
// Show what's in the array
console.log(tasks);
// The Element where I want to put the array
let taskContainer = document.getElementById("task-container");
for (let i = 0; i < tasks.length; i++) {
    let listItem = document.createElement("div");
    listItem.innerHTML = "<input type='checkbox'><div>" + tasks[i] + "</div><i class='fas fa-times'>";
    taskContainer.appendChild(listItem);
    
}
