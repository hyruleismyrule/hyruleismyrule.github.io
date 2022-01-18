const links = [
    {
        label: "Week1 notes",
        url: "W01/index.html"
    },
    {
        label: "Week2 notes",
        url: "W02/index.html"
    },
    {
        label: "Week3 notes",
        url: "W03/index.html"
    }
]

// Create Links
for (let i = 0; i < links.length; i++) {

    let weekLi = document.createElement("li");
    let label = document.createElement("a");

    label.textContent = links[i].label;
    label.setAttribute("href", links[i].url);

    weekLi.append(label);

    document.getElementById("weekNav").appendChild(weekLi);
}
