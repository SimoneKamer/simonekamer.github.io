function ShowGamePlay (){
}

function showPositionStatus (position){
        if ((position.isOccupied()){
            if (position.getCard().isVisible()){
            console.log ("voorkant" /*position.getCard().getCardName()*/);
            else console.log ("achterkant");
            }
        }
        else {
        console.log ("leeg");
        }
    }
};

function showGameArea (){
    for (i=0;i<positions.length;i++){
        showPositionStatus (positions[i]);
    }
}



// callActivePlayer
// showScore
// showGameArea
// console.log: ("dit is nu het speelbord: " + showGameArea() );

