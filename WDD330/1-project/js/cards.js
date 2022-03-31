// Call api
const defaultPokemonAPIurl = "//pokeapi.co/api/v2/pokemon?limit=9";
fetch(defaultPokemonAPIurl)
    .then((response) => response.json())
    .then((nameInfo) => {
        console.log(nameInfo);
        defaultSet(nameInfo);
    });
// Initialize display arrays
let displayNames = [];
let displayImages = [];
let displayTypes = [];

// Create a Default Set
// Get the names
async function defaultSet(nameInfo) {
    let defaultSet = [];
    for (let i = 0, len = nameInfo.results.length; i < len; i++) {
        defaultSet.push(nameInfo.results[i].name);
    }
    // console.log(defaultSet);
    // return defaultSet;
    await defaultImages(defaultSet);
    showSlides(slideIndex);
}

// Get the Image URLS
async function defaultImages(defaultSet) {

    const pokemonAPIurlBase = "//pokeapi.co/api/v2/pokemon/";
    let defaultImages = [];
    let defaultTypes = [];
    for (let i = 0, len = defaultSet.length; i < len; i++) {
        let tempURL = pokemonAPIurlBase + defaultSet[i];
        await fetch(tempURL)
            .then((response) => response.json())
            .then((imageInfo) => {
                let artURL = imageInfo.sprites.other["official-artwork"].front_default;
                let type = imageInfo.types[0].type.name;
                defaultImages.push(artURL);
                defaultTypes.push(type);
            });
    }
    // console.log(defaultImages);
    // console.log(defaultTypes);
    let setName = "Big 3";
    displayNames = defaultSet;
    displayImages = defaultImages;
    displayTypes = defaultTypes;
    // console.log(displayImages[0]);
    buildCards(displayNames, displayImages, displayTypes, setName);
}

// Build Set, will use whatever is in display
function buildCards(displayNames, displayImages, displayTypes, setName) {
    // console.log(displayImages);
    // console.log(displayImages[0]);
    let title = document.createElement("h1");
    title.textContent = setName;
    document.getElementById("review").appendChild(title);

    for (let i = 0, len = displayNames.length; i < len; i++) {
        let name = displayNames[i];
        // Capitalize the first letter
        name = name.charAt().toUpperCase() + name.substring(1)

        let artURL = displayImages[i];

        let card = document.createElement("div");
        // card.setAttribute('class', "mySlides");
        card.setAttribute('class', "flash-card mySlides" + " "+displayTypes[i]);
        // card.setAttribute('class', displayTypes[i]);

        let inner = document.createElement("div");
        inner.setAttribute('class', "card-inner");

        let front = document.createElement("div");
        front.setAttribute('class', "card-front");

        let back = document.createElement("div");
        back.setAttribute('class', "card-back");

        let nameElement = document.createElement("h2");
        let imageElement = document.createElement("img");

        nameElement.textContent = name;
        imageElement.setAttribute('src', artURL);
        imageElement.setAttribute('alt', name);

        front.appendChild(imageElement);
        back.appendChild(nameElement);

        inner.appendChild(front);
        inner.appendChild(back);

        card.appendChild(inner);

        document.getElementById("review").appendChild(card);
        // document.getElementById("bottom-nav").setAttribute('id', "show");
    }
}


// Making the slide show
let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("flash-card");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
}