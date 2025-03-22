let homeCountEl = document.getElementById("home-count");
let guestCountEl = document.getElementById("guest-count");

let homeCount = 0;
let guestCount = 0;

function homeScore(points) {
    homeCount += points;
    homeCountEl.textContent = homeCount;
}

function guestScore(points) {
    guestCount += points;
    guestCountEl.textContent = guestCount;
}

