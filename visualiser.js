function Visualiser(){

};

Visualiser.prototype.revealCard = function(cardName, index) {

    console.log("revealCard " + cardName);


    // Zoek de juiste position
    var position = document.getElementsByClassName("position")[index];

    // Wissel het plaatje van het kaartje
    position.getElementsByTagName("img")[0].src = 'images/' + cardName + ".jpg";
}

Visualiser.prototype.hideCard = function(index) {
    var position = document.getElementsByClassName("position")[index];
    position.getElementsByTagName("img")[0].src = "images/achterkant.jpg";
}

Visualiser.prototype.emptyPositions = function(index1, index2){
    var position = document.getElementsByClassName("position")[index1];
    position.getElementsByTagName("img")[0].src = "";
    var position = document.getElementsByClassName("position")[index2];
    position.getElementsByTagName("img")[0].src = "";
}
// empty position
// show score