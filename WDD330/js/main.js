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
    },
    {
        label: "Week4 notes",
        url: "W04/index.html"
    },
    {
        label: "Week5 notes",
        url: "W05/index.html"
    },
    {
        label: "Week6 notes",
        url: "W06/index.html"
    },
    {
        label: "Week7 notes",
        url: "W07/index.html"
    },
    {
        label: "Week8 notes",
        url: "W08/index.html"
    },
    {
        label: "Week9 notes",
        url: "W09/index.html"
    },
    {
        label: "Week10 notes",
        url: "W10/index.html"
    },
    {
        label: "Week11 notes",
        url: "W11/index.html"
    },
    {
        label: "Week14 notes",
        url: "W14/index.html"
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
