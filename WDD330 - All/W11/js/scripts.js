// // This will show as invalid for every letter they type until it it correct
// const email = document.getElementById("mail");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//     email.reportValidity();
//   } else {
//     email.setCustomValidity("");
//   }
// });
// 
// 
// 
// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}




// Fetch Notes
// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });


// Uploading/ Posing example
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});