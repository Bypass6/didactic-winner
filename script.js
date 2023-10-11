document.addEventListener("DOMContentLoaded", function () {
    const feedButton = document.getElementById("feed-button");
    const playButton = document.getElementById("play-button");
    const trainButton = document.getElementById("train-button");
    const gameLog = document.querySelector(".game-log");

    let pet = {
        name: "Your Pet",
        level: 1,
        experience: 0,
        happiness: 100,
    };

    feedButton.addEventListener("click", function () {
        // Implement feeding logic here
        gameLog.textContent = "You fed your pet!";
    });

    playButton.addEventListener("click", function () {
        // Implement playing logic here
        gameLog.textContent = "You played with your pet!";
    });

    trainButton.addEventListener("click", function () {
        // Implement training logic here
        gameLog.textContent = "You trained your pet!";
    });
});
