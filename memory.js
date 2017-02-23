function Player(playerName){
    var playerName = playerName;
    var score = 0;
    this.getName = function (){
        return playerName;
    }
    this.getScore = function (){
        return score;
    }
    this.addPointToScore = function (){
        score++;
    }
}

Player.prototype.getName = function () {
    return this.getName();
};

Player.prototype.getScore = function () {
    return this.getScore();
};

Player.prototype.addPointToScore = function () {
    return this.addPointToScore();
};

function Card(cardName){
    var cardName = cardName;
    var visible = false;
    this.getCardName = function (){
            return cardName;
    }
    this.isVisible = function () {
         return visible;
    }
    this.turn = function(){
        visible = !visible;
    }
}

function Position(card){
    var card = card;
    var occupied = true;
    this.getCard = function (){
        return card;
    }
    this.isOccupied = function () {
        return occupied;
    }
    
    this.emptyPosition = function () {
        occupied = false;
    }

}

function MemoryGame(playerNames, cardNames, shuffleMachine, visualiser) {

    var firstCard = true;
    var firstSelectedCardName;
    var secondSelectedCardName;
    var firstSelectedPosition;
    var secondSelectedPosition;
    var anyOccupiedPositions;
    var players;
    var positions;
    var indexOfActivePlayer;
    var indexOfCard1;
    var indexOfCard2;
    var imBusy;
    
/* dupliceer alle kaartjes*/
   this.createPositions = function (cardNames){
       var positions = [];
       for (var i = 0; i < cardNames.length; i++) {
              positions.push(new Position(new Card(cardNames[i])));
              positions.push(new Position(new Card(cardNames[i])));
       }
       return positions;
   };
/* haal lijst van spelers op*/
   this.createPlayers = function (playerName){
        var players = [];
        for (var i = 0; i < playerName.length; i++) {
              players.push(new Player(playerName[i]));
        }
        return players;
   };


    this.getNameOfActivePlayer = function () {
        return players[indexOfActivePlayer].getName();
    }

    this.getScoreOfActivePlayer = function () {
        return players[indexOfActivePlayer].getScore();
    }

    this.addPointToScoreOfActivePlayer = function () {
        players[indexOfActivePlayer].addPointToScore();
    }

    this.isPositionOccupied = function (index){
        return positions[index].isOccupied();
    };

    this.processPosition = function (selectedIndex){
        if (imBusy){
            return;
        }
        var selectedPosition = positions[selectedIndex];
        /*controleer of de speler de eerste of de tweede kaart aanklikt */

        if (firstCard) {
           processFirstCard(selectedPosition, selectedIndex);
        }
        else {
           processSecondCard(selectedPosition, selectedIndex);
        }
    };

    var processFirstCard = function (position, index){
        position.getCard().turn();
        var card1 = position.getCard().getCardName();
        var position1 = position;
        indexOfCard1 = index;
        visualiser.revealCard(card1, index);
        firstCard = false;
        firstSelectedCardName = card1;
        firstSelectedPosition = position1;
    };

    var processSecondCard = function (position, index){
        /* controleer of het kaartje al omgedraaid is */
        if (position.getCard().isVisible()) {
            console.log ("kaart al gekozen");
        }
        else {
            /* draai het kaartje om */
            position.getCard().turn();
            var card2 = position.getCard().getCardName();
            indexOfCard2 = index;
            visualiser.revealCard(card2, index);
            secondSelectedCardName = card2;
            secondSelectedPosition = position;
            compareCards();
            firstCard = true;
        }
    };
    var compareCards = function (){
        console.log (firstSelectedCardName, secondSelectedCardName);
        imBusy = true;
        if (firstSelectedCardName==secondSelectedCardName) {
            console.log ("twee gelijke kaarten");
            // wacht 5 seconden = 5000
            window.setTimeout (function (){handleSituationWhenBothCardsAreIdentical()},1000);
        }
        else {
            console.log ("twee verschillende kaarten");
            // wacht 5 seconden = 5000
            window.setTimeout (function (){handleSituationWhenBothCardsAreDifferent()},1000);
        }
    }
    var handleSituationWhenBothCardsAreIdentical = function () {
        emptyPositions ();
        checkOccupationPositions();
        players[indexOfActivePlayer].addPointToScore();
        visualiser.updateScoreOfActivePlayer(indexOfActivePlayer,players[indexOfActivePlayer].getScore());
        imBusy = false;
    }
    var handleSituationWhenBothCardsAreDifferent = function () {
       firstSelectedPosition.getCard().turn();
       secondSelectedPosition.getCard().turn();
       visualiser.hideCard(indexOfCard1);
       visualiser.hideCard(indexOfCard2);
       switchActivePlayer();
       imBusy = false;
    }

    var emptyPositions = function () {
        firstSelectedPosition.emptyPosition();
        secondSelectedPosition.emptyPosition();
        visualiser.emptyPositions(indexOfCard1, indexOfCard2);
    };

    var checkOccupationPositions = function(){
        anyOccupiedPositions = false;
        for (i=0;i<positions.length;i++){
            if (positions[i].isOccupied()){
            anyOccupiedPositions = true;
            console.log("zijn er nog kaartjes over? " + anyOccupiedPositions);
            }
        }
    };

    var switchActivePlayer = function () {
        if (indexOfActivePlayer == players.length - 1) {
            indexOfActivePlayer = 0;
        }
        else {
            indexOfActivePlayer++;
        }
    }




    var initGame = function () {
    /* haal lijst van spelers op*/
        players = createPlayers(playerNames);
    /* dupliceer alle kaartjes*/
        positions = createPositions(cardNames);
    /* schud de kaartjes*/ /* leg kaartjes op beginpositie*/
        shuffleMachine.shuffle(positions);
    /* selecteer beginspeler */
        shuffleMachine.shuffle(players);
        indexOfActivePlayer = 0;
    /*zet score van alle spelers op 0 */
        visualiser.createScoreboard(players);

    };

    var createPlayers = function (playerName){
        var players = [];
        for (var i = 0; i < playerName.length; i++) {
              players.push(new Player(playerName[i]));
        }
        return players;
   };

    var createPositions = function (cardNames){
       var positions = [];
       for (var i = 0; i < cardNames.length; i++) {
              positions.push(new Position(new Card(cardNames[i])));
              positions.push(new Position(new Card(cardNames[i])));
       }
       return positions;
   };

    initGame ();


      //   if alle kaartjes zijn weggehaald: buiten de while loop
        /* benoem een winnaar */
        /* vraag of ze het nog een keer willen spelen */



}

MemoryGame.prototype.selectPosition = function selectPosition(index){
        if (this.isPositionOccupied(index)){
            this.processPosition(index);
        }
        else {
            console.log ("lege plek gekozen");
        }
    }
MemoryGame.prototype.getNameOfActivePlayer = function getNameOfActivePlayer() {
    return this.getNameOfActivePlayer();
}
MemoryGame.prototype.getScoreOfActivePlayer = function getScoreOfActivePlayer() {
    return this.getScoreOfActivePlayer();
}