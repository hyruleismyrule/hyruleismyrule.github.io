
let input = document.querySelector('input');
input.focus();
const addChapterButton = document.getElementById('addChapterButton');
const list = document.getElementById('list');

input = document.getElementById("chapter");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addChapterButton").click();
        }
    });

addChapterButton.addEventListener('click', function () {
    if (input != null) {
        const listItem = document.createElement('li');
        listItem.textContent = document.getElementById('chapter').value;
        document.getElementById('chapter'). value = "";
        // input.textContent = "";
        const listButton = document.createElement('button');
        listButton.textContent = "❌";
        // delete here
        listButton.addEventListener('click', function () {
            listItem.remove();
            input.focus();
        });
        listItem.append(listButton);
        list.appendChild(listItem);
    }
});
    