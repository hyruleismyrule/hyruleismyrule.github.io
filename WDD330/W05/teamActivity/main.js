import { hikes, Hike } from "./hikes.js";

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  showHikeList();

  const hikeElements = [...document.getElementsByClassName("hike")];
  hikeElements.forEach(el => el.addEventListener("onclick", (el) => {
    toggleHikeDetails(el.target);
  }))
});



function showHikeList() {
  const hikeListElement = document.getElementById("hikes");
  hikeListElement.innerHTML = "";
  renderHikeList(hikeListElement);
};

function toggleHikeDetails(el) {
  const detailsElement = el.getElementById("description");
  detailsElement.classList.toggle('hidden');
};

function renderHikeList(parent) {
  hikes.forEach(hike => {
    parent.appendChild(renderOneHike(hike));
  });
};

function renderOneHike(hike) {
  const item = document.createElement("div");

  item.className = "hike";
  item.innerHTML = ` <div>
                        <h2>${hike.name}</h2>
                        <div class="image"><img src="${hike.src}" alt="${hike.imgAlt}"></div>
                        <div class="box">
                          <div class="text">
                            <div>
                                <h3>Distance</h3>
                                <p>${hike.distance}</p>
                            </div>
                            <div>
                                <h3>Difficulty</h3>
                                <p>${hike.difficulty}</p>
                            </div>
                          </div>
                        </div>
                        </div>
                      <div id="description" class="hidden">
                          <h3>Description</h3>
                          <p>${hike.description}</p>
                          <h3>Directions</h3>
                          <p>${hike.directions}</p>
                      </div>
        </div>
        </div>`;

  return item;
}