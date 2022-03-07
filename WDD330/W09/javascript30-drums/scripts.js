window.addEventListener("keydown",keyHandler);
function keyHandler(e) {
    const audioElement = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const dataKey = document.querySelector(`div[data-key='${e.keyCode}']`);
    
    let pressed = parseInt(dataKey.getAttribute("pressed"));
    if (!pressed || pressed == 10) pressed = 1;
    dataKey.setAttribute("pressed",pressed + 1);

    audioElement.currentTime = 0;
    audioElement.addEventListener('ended', (f) => {
        dataKey.classList.remove("playing");
    });
    audioElement.play();
    dataKey.classList.add("playing");

    dataKey.style.transform = `translateY(${pressed*10}px)`;
}