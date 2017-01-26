function Visualiser(){
    this.findPosition = function(index){
        return document.getElementsByClassName("position")[index];
    }
};

Visualiser.prototype.revealCard = function(cardName, index) {
    var position = this.findPosition(index);
    position.getElementsByTagName("img")[0].src = 'images/' + cardName + ".jpg";
}

Visualiser.prototype.hideCard = function(index) {
    var position = this.findPosition(index);
    position.getElementsByTagName("img")[0].src = "images/achterkant.jpg";
}

Visualiser.prototype.emptyPositions = function(index1, index2){
    var position = this.findPosition(index1);
    position.getElementsByTagName("img")[0].src = "";
    var position = this.findPosition(index2);
    position.getElementsByTagName("img")[0].src = "";
}
// show score