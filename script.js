const app = document.getElementById('app');

let userName = '';
let isFree = false;

// Step 1: Ask for the user's name
function askName() {
  app.innerHTML = `
    <h1>What is your name?</h1>
    <input type="text" id="nameInput" placeholder="Enter your name">
    <button onclick="submitName()">Submit</button>
  `;
}

// Step 2: Ask if the user is free on 14th February 2025
function askAvailability() {
  app.innerHTML = `
    <h1>Hi ${userName}, are you free on 14th February 2025?</h1>
    <button onclick="setAvailability(true)">Yes</button>
    <button onclick="setAvailability(false)">No</button>
  `;
}

// Step 3: Show the photo and ask if they want to go out
function showPhoto() {
  app.innerHTML = `
    <h1>Would you like to go out with this man?</h1>
    <img src="photo1.jpg" alt="Man">
    <button onclick="showNextPhoto()">Yes</button>
    <button onclick="endApp()">No</button>
  `;
}

// Step 4: Show the next photo
function showNextPhoto() {
  app.innerHTML = `
    <h1>Great choice! Here's another photo:</h1>
    <img src="photo2.jpg" alt="Man">
    <button onclick="endApp()">Close</button>
  `;
}

// Step 5: End the app
function endApp() {
  app.innerHTML = `
    <h1>Thank you, ${userName}! Have a great day!</h1>
  `;
}

// Helper functions
function submitName() {
  userName = document.getElementById('nameInput').value;
  if (userName) {
    askAvailability();
  } else {
    alert('Please enter your name!');
  }
}

function setAvailability(free) {
  isFree = free;
  if (isFree) {
    showPhoto();
  } else {
    endApp();
  }
}

// Start the app
askName();
