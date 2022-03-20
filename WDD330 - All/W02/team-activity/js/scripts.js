function reader() {
  let box = document.getElementById("readme").value;
  let paper = document.getElementById("ItsMe");
  if (isNaN(box)) {
    alert("Please enter a valid number!")
    return;
  }
  paper.innerHTML = superFunction(parseInt(box));
}

function superFunction(mahNumber) {
  let number = 0;
  for (let i = 0; i <= mahNumber; i++) {
    number += i;
  }
  return number;
}

function add() {
  let paper = document.getElementById("Mario");
  paper.innerHTML = getNumber("readme") + getNumber("input2");
}

function getNumber(id) {
  let number = parseInt(document.getElementById(id).value);
  checkNaN(number);
  return number;
}

function checkNaN(number) {
  if (isNaN(number)) {
    alert("Please enter a valid number!")
    return;
  }
}

const subtract = function () {
  let paper = document.getElementById("Mario");
  paper.innerHTML = getNumber("readme") - getNumber("input2");
}

multiply = () => {
  let paper = document.getElementById("Mario");
  paper.innerHTML = getNumber("readme") * getNumber("input2");
}