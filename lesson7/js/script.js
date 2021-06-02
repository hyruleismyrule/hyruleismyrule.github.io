// Progressive loading images
const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

// Hamburger Munu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// Footer Last Edited
let oLastModif = new Date(document.lastModified);

let optionsMonth = { month: 'long', };
let optionsDay = { weekday: 'long', };

let day = oLastModif.toLocaleDateString("en-US", optionsDay);
let date = oLastModif.getDate();
let month = oLastModif.toLocaleDateString("en-US", optionsMonth);
let year = oLastModif.getFullYear();

let dateString = day + ", " + date + " " + month + " " + year;

document.getElementById('lastUpdated').innerHTML = dateString;

// Display Message on Friday
const today = new Date();
// console.log(today);

const dayNumber = today.getDay();
// console.log(dayNumber);

const element = document.getElementById("message")

if (dayNumber == 5 ) {
    element.classList.add("showme")
} else {
    element.classList.add("hideme")
}

/*
// Visited Days Ago
const lastVisit = getCookie('lastVisitTime');
const now = Date.now();
if (lastVisit) {
   const hoursSinceLastTime = Math.ceil((parseInt(lastVisit) - now) / 3600);
   alert(`It's been ${hoursSinceLastTime} hour(s) since you last visited us.`);
}
setCookie('lastVisitTime', now);

lastVisited

// Footer Last Edited

let optionsMonth = { month: 'long', };
let optionsDay = { weekday: 'long', };

let day = oLastModif.toLocaleDateString("en-US", optionsDay);
let date = oLastModif.getDate();
let month = oLastModif.toLocaleDateString("en-US", optionsMonth);
let year = oLastModif.getFullYear();

let dateString = day + ", " + date + " " + month + " " + year;

document.getElementById('lastUpdated').innerHTML = dateString;
*/

// Visited Days Ago
let now = new Date();
let lastVisit = storage.getItem("lastVisitTime");
now = Date.now();
let daysAgo = Math.ceil((parseInt(lastVisit) - now));
if (lastVisit - now < 2) {
  if (lastVisit - now == 1) {
    document.getElementById('lastVisited').innerHTML = "1 Day Ago";
  }
} else {
  document.getElementById('lastVisited').innerHTML = daysAgo + " Days Ago";
}

storage.setItem("lastVisitTime", now);