document.addEventListener("DOMContentLoaded", function () {
    updateUI();
});

let step = 1;
let userName = "";

function nextQuestion() {
    if (step === 1) {
        userName = document.getElementById("nameInput").value.trim();
        if (!userName) {
            alert("Please enter your name.");
            return;
        }
        step++;
    } else if (step === 2 || step === 3) {
        step++;
    }
    updateUI();
}

function updateUI() {
    const content = document.getElementById("content");
    
    if (step === 1) {
        content.innerHTML = `
            <h2>What is your name?</h2>
            <input type="text" id="nameInput" placeholder="Enter your name">
            <button id="submitBtn">Submit</button>
        `;
        document.getElementById("submitBtn").addEventListener("click", nextQuestion);
    } else if (step === 2) {
        content.innerHTML = `
            <h2>Hi ${userName}, are you free on February 14, 2025?</h2>
            <button id="yesBtn">Yes</button>
            <button id="noBtn">No</button>
        `;
        document.getElementById("yesBtn").addEventListener("click", nextQuestion);
        document.getElementById("noBtn").addEventListener("click", nextQuestion);
    } else if (step === 3) {
        content.innerHTML = `
            <h2>Would you like to go out with this man?</h2>
            <img src='image1.jpg' alt='Person' width='200'>
            <br>
            <button id="yesGoBtn">Yes</button>
            <button id="noGoBtn">No</button>
        `;
        document.getElementById("yesGoBtn").addEventListener("click", nextQuestion);
        document.getElementById("noGoBtn").addEventListener("click", function() {
            alert("Maybe next time!");
        });
    } else if (step === 4) {
        content.innerHTML = `
            <h2>Great! Here's another photo.</h2>
            <img src='image2.jpg' alt='Person' width='200'>
        `;
    }
}
