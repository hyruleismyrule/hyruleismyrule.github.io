const links = [
    {
        label: "Week1 Notes",
        url: "W01/index.html"
    }
]

// const links = [
//     {
//         label: "Week1 notes",
//         url: "week1/index.html"
//     },
//     {
//         label: "Week2 notes",
//         url: "week2/index.html"
//     }
// ]

// Create Links
for (let i = 0; i < links.length; i++) {

    let weekLi = document.createElement("li");
    let label = document.createElement("a");

    label.textContent = links[i].label;
    label.setAttribute("href", links[i].url);

    weekLi.append(label);

    document.getElementById("weekNav").appendChild(weekLi);
}
