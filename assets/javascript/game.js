// establish variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["../assets/images/crystal-blue.png", "../assets/images/crystal-purple.png", "../assets/images/Crystal-Red.png", "../assets/images/Crystal-Yellow"];

// functions for gameplay
// establishing random number being picked is between 19-125
function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 125) + 19;
}

function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() *12 ) + 1));
        crystal.attr("height", "100");
        $(".crystal.images").append(crystal);
    }
}