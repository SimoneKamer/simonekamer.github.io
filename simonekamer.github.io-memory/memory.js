function Player(playerName){
    var playerName = playerName;
    var score = 0;
    this.getName = function (){
        return playerName;
    }
}

Player.prototype.getName = function () {
    return this.getName();
}

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
        console.log ("turn: kaartje is omgedraaid", visible);
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
        console.log ("positie wordt leeggehaald");
    }
}

function MemoryGame(playerNames, cardNames, shuffleMachine) {

    var firstCard = true;
    var firstSelectedCardName;
    var secondSelectedCardName;
    var firstSelectedPosition;
    var secondSelectedPosition;
    var anyOccupiedPositions;
    var players;
    var positions;
    var indexOfActivePlayer;


    this.getNameOfActivePlayer = function () {
        return players[indexOfActivePlayer].getName();
    }

    this.isPositionOccupied = function (index){
        return positions[index].isOccupied();
    };

    this.processPosition = function (selectedIndex){
        var selectedPosition = positions[selectedIndex];
        console.log ("gekozen kaart:", selectedPosition.getCard().getCardName());
        /*controleer of de speler de eerste of de tweede kaart aanklikt */
        if (firstCard) {
           processFirstCard(selectedPosition);
        }
        else {
           processSecondCard(selectedPosition);
        }
    };

    var processFirstCard = function (position){
        position.getCard().turn();
        console.log ("de kaart is daadwerkelijk omgedraaid", position.getCard().isVisible());
        var card1 = position.getCard().getCardName();
        var position1 = position;
        console.log("keuze 1", card1);
        firstCard = false;
        console.log ("bij false schakelt hij naar tweede kaart:", firstCard);
        firstSelectedCardName = card1;
        firstSelectedPosition = position1;
    };

    var processSecondCard = function (position) {
         console.log ("is het kaartje zichtbaar", position.getCard().isVisible());
        /* controleer of het kaartje al omgedraaid is */
        if (position.getCard().isVisible()) {
            console.log ("kaart al gekozen");
        }
        else {
            /* draai het kaartje om */
            position.getCard().turn();
            var card2 = position.getCard().getCardName();
            console.log("keuze 2", card2);
            secondSelectedCardName = card2;
            secondSelectedPosition = position;
            compareCards();
            firstCard = true;
        }
    };
    var compareCards = function (){
        console.log (firstSelectedCardName, secondSelectedCardName);
        if (firstSelectedCardName==secondSelectedCardName) {
            console.log ("twee gelijke kaarten");
            // wacht 5 seconden
            wait (5000);
            emptyPositions ();
            checkOccupationPositions();

        }
        else {
            console.log ("twee verschillende kaarten");
            // wacht 5 seconden
            wait (5000);
            // draai kaartjes terug
            firstSelectedPosition.getCard().turn();
            secondSelectedPosition.getCard().turn();
            //todo wissel beurt
            switchActivePlayer();

        }
    }

    var wait = function wait(ms){
       var start = new Date().getTime();
       var end = start;
       while(end < start + ms) {
         end = new Date().getTime();
      }
    };

    var emptyPositions = function () {
        firstSelectedPosition.emptyPosition();
        secondSelectedPosition.emptyPosition();
    };

    var checkOccupationPositions = function(){
        anyOccupiedPositions = false;
        for (i=0;i<positions.length;i++){
            if (positions[i].isOccupied()){
            anyOccupiedPositions = true;
            console.log(anyOccupiedPositions);
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
    };

    var createPositions = function (cardNames){
        console.log ("dupliceer alle kaartjes");
       var positions = [];
       for (var i = 0; i < cardNames.length; i++) {
              positions.push(new Position(new Card(cardNames[i])));
              positions.push(new Position(new Card(cardNames[i])));
       }
       return positions;
   };

    var createPlayers = function (playerName){
        console.log ("haal lijst van spelers op");
        var players = [];
        for (var i = 0; i < playerName.length; i++) {
              players.push(new Player(playerName[i]));
        }
        return players;
   };



    initGame ();

// todo   this.activePlayer = function {    }


//  todo  somePositionsOccupied = function {

//    }
// todo while anyOccupiedPositions {




/*speler kiest een positie, klikt er op*/











//                  }
//              this.firstCard = true; // is dit hier nodig, nog checken. ligt er aan naar welke plek je zo terug gaat.








        /* geef huidige speler een punt */
        /* controleer of alle kaartjes weggehaald zijn : checkOccupationPositions*/
//            if alle kaartjes zijn weggehaald: buiten de while loop

            /* benoem een winnaar */
            /* vraag of ze het nog een keer willen spelen */
//            }
//            else {
            /* nieuwe beurt */
            /* firstCard = true*/
//           }
//        }
//        else {

        /* nieuwe beurt */
//        }
//  }



}

MemoryGame.prototype.selectPosition = function selectPosition(index){
  /*controleer of er op die positie een kaart ligt*/
        if (this.isPositionOccupied(index)){
            this.processPosition(index);// TODO: ga door met spel
        }
        else {
            console.log ("lege plek gekozen");
        }
    }
MemoryGame.prototype.getNameOfActivePlayer = function getNameOfActivePlayer() {
    return this.getNameOfActivePlayer();
}