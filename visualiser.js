function Visualiser(){

};

Visualiser.prototype.revealCard = function(cardName, index) {

    // Zoek de juiste position
    var position = document.getElementsByClassName("position")[index];

    // Wissel het plaatje van het kaartje
    position.getElementsByTagName("img")[0].src = '../simonekamer/images/' + cardName + ".jpg";
}
