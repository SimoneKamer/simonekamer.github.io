function Player(playerName){
   var playerName = playerName;
   var score = 0;
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

function PlayMemory (playerNames, cardNames) {

    this.createPositions = function (cardNames){
        console.log ("dupliceer alle kaartjes");
       var positions = [];
       for (var i = 0; i < cardNames.length; i++) {
              positions.push(new Position(new Card(cardNames[i])));
              positions.push(new Position(new Card(cardNames[i])));
       }
       return positions;
   };

    this.createPlayers = function (playerName){
        console.log ("haal lijst van spelers op");
        var players = [];
        for (var i = 0; i < playerName.length; i++) {
              players.push(new Player(playerName[i]));
        }
        return players;
   };

    this.shuffle = function shuffle(array) {
   console.log (array, "schudden");
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
        return array;
   }

    this.getCardName = function (index){
        return positions[index].getCard().getCardName();
    }

    this.checkOccupationPositions = function(){
        anyOccupiedPositions = false;
        for (i=0;i<positions.length;i++){
            if (positions[i].isOccupied()){
            anyOccupiedPositions = true;
            console.log(anyOccupiedPositions);
            }
        }
    }

    var firstCard = true;
    var firstSelectedCardName;
    var secondSelectedCardName;
    var firstSelectedPosition;
    var secondSelectedPosition;
    var activePlayer;
    var anyOccupiedPositions;

    function wait(ms){
       var start = new Date().getTime();
       var end = start;
       while(end < start + ms) {
         end = new Date().getTime();
      }
    }

/* haal lijst van spelers op*/
    var players = this.createPlayers(playerNames);
/* dupliceer alle kaartjes*/
    var positions = this.createPositions(cardNames);
/* schud de kaartjes*/ /* leg kaartjes op beginpositie*/
    this.shuffle(positions);
/* selecteer beginspeler */
    this.shuffle(players);

//    this.activePlayer = function {    }


//    somePositionsOccupied = function {

//    }
//while anyOccupiedPositions {




/*speler kiest een positie, klikt er op*/
    this.selectPosition = function selectPosition(index){
        console.log ("geklikt" + index);
  /*controleer of er op die positie een kaart ligt*/
        var occupied = positions[index].isOccupied();
        console.log ("occupied", occupied);
        if (occupied){
            this.processPosition(positions[index]);// TODO: ga door met spel
        }
        else {
            console.log ("lege plek gekozen");
        }
    }
    this.processFirstCard = function (position){
        position.getCard().turn();
        console.log ("de kaart is daadwerkelijk omgedraaid", position.getCard().isVisible());
        var card1 = position.getCard().getCardName();
        var position1 = position;
        console.log("keuze 1", card1);
        firstCard = false;
        console.log ("bij false schakelt hij naar tweede kaart:", firstCard);
        firstSelectedCardName = card1;
        firstSelectedPosition = position1;
    }
    this.processSecondCard = function (position) {
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
            this.compareCards();
        }
    }

    this.processPosition = function (selectedPosition){
        console.log ("gekozen kaart:", selectedPosition.getCard().getCardName());
        console.log ("is dit de eerste kaart", firstCard);
        /*controleer of de speler de eerste of de tweede kaart aanklikt */
        if (firstCard) {
           this.processFirstCard(selectedPosition);
        }
        else {
           this.processSecondCard(selectedPosition);
        }
    }

    this.emptyPositions = function () {
        firstSelectedPosition.emptyPosition();
        secondSelectedPosition.emptyPosition();
    }

    this.compareCards = function (){
        console.log (firstSelectedCardName, secondSelectedCardName);
        if (firstSelectedCardName==secondSelectedCardName) {
            console.log ("twee gelijke kaarten");
            // wacht 5 seconden
            wait (5000);
            this.emptyPositions ();
            this.checkOccupationPositions();

        }
        else {
            console.log ("twee verschillende kaarten");
            // wacht 5 seconden
            wait (5000);
            // draai kaartjes terug
            firstSelectedPosition.getCard().turn();
            secondSelectedPosition.getCard().turn();
            // wissel beurt

        }
}


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

