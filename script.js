document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", nextQuestion);
});

function nextQuestion() {
    const userName = document.getElementById("nameInput").value.trim();
    if (!userName) {
        alert("Please enter your name.");
        return;
    }
    document.getElementById("content").innerHTML = `
        <h2>Hi ${userName}, are you free on February 14, 2025?</h2>
        <button id="yesBtn">Yes</button>
        <button id="noBtn">No</button>
    `;
    
    document.getElementById("yesBtn").addEventListener("click", function() {
        showPhoto("yes");
    });
    document.getElementById("noBtn").addEventListener("click", function() {
        showPhoto("no");
    });
}

function showPhoto(response) {
    if (response === "yes") {
        document.getElementById("content").innerHTML = `
            <h2>Would you like to go out with this man?</h2>
            <img src='image1.jpg' alt='Person' width='200'>
            <br>
            <button id="yesGoBtn">Yes</button>
            <button id="noGoBtn">No</button>
        `;
        
        document.getElementById("yesGoBtn").addEventListener("click", showSecondPhoto);
        document.getElementById("noGoBtn").addEventListener("click", function() {
            alert("Maybe next time!");
        });
    } else {
        alert("Maybe next time!");
    }
}

function showSecondPhoto() {
    document.getElementById("content").innerHTML = `
        <h2>Great! Here's another photo.</h2>
        <img src='image2.jpg' alt='Person' width='200'>
    `;
}
