function ShowGamePlay (position){
var position;
var showGameArea;
var showPositionStatus;
var showScore;

    this.showPositionStatus = function(position){
        if ((position.isOccupied()){
            if (position.getCard().isVisible()){
            console.log ("-voorkant-" /*position.getCard().getCardName()*/);
            else console.log ("-achterkant-");
            }
        }
        else {
        console.log ("-leeg-");
        }
    }


    this.showGameArea = function (){
        for (i=0;i<positions.length;i++){
            showPositionStatus (positions[i]);
        }
    }

};


// callActivePlayer
// showScore
// showGameArea
ShowGamePlay.prototype.showGameArea function showGameArea() {
    return this.showGameArea();

    console.log ("dit is nu het speelbord: " + showGameArea() );

