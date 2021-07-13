// Web font loader
WebFont.load({
    google: {
        families: ['EB Garamond', 'Catamaran']
    }
});

// Hamburger menu toggle
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// Last updeted
let oLastModif = new Date(document.lastModified);
let optionsMonth = { month: 'long', };
let optionsDay = { weekday: 'long', };
let day = oLastModif.toLocaleDateString("en-US", optionsDay);
let date = oLastModif.getDate();
let month = oLastModif.toLocaleDateString("en-US", optionsMonth);
let year = oLastModif.getFullYear();
let dateString = day + ", " + date + " " + month + " " + year;
document.getElementById('lastUpdated').innerHTML = dateString;
