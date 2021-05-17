
const input = document.querySelector('input');
input.focus();
const addChapterButton = document.getElementById('addChapterButton');
const list = document.getElementById('list');
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
// document.getElementById('chapter').Value