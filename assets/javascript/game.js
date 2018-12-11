// establish variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["assets/images/crystal-blue.png", "assets/images/crystal-purple.png", "assets/images/Crystal-Red.png", "assets/images/Crystal-Yellow.png"];

// functions for gameplay
// establishing random number being picked is between 19-125
function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 125) + 19;
}

function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 19) + 1));
        crystal.attr("height", "100");
        $(".crystal.images").append(crystal);
    }
}

function resetHTML() {
    $(".target-number").text(targetNumber);
    //console.log("target-number");
    $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".score-number").html(counter);
    //console.log("score-number");
    $(".crystal-images").empty();
}

function totalReset() {
    randomTargetNumber();
    counter = 0;
    resetHTML();
    resetCrystals();
}

// asymmetrical code

// page run up
randomTargetNumber ();
resetHTML ();
resetCrystals ();

// onClick functions

function crystalClick() {
    // attr returns value of selected html element
    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    console.log("score-Number");
    if (counter == targetNumber) {
        wins++;
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        totalReset();
    };
};
// changes everytime crystalClick is executed
$(document).on("click", ".crystal", crystalClick);