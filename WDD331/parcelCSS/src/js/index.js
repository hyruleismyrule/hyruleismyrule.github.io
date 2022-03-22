//  import $ from 'jquery';
//  import popper from 'popper.js';
//  import bootstrap from 'bootstrap';
 import $ from 'jquery';
 import popper from 'popper.js';
 import bootstrap from 'bootstrap';
// check to see if javascript is working
function component() {
  const element = document.createElement("p");

  element.innerHTML = "Setup Appears to be working &#128521;";

  return element;
}
document.body.appendChild(component());

// test jquery and Bootstrap setup
$(document).ready(() => {
  const element = $("<p></p>").html("Jquery Appears to be working &#128521;");

  element.appendTo("body");
  $(() => {
    $('[data-toggle="popover"]').popover();
  });
});
