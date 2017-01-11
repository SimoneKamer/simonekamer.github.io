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
        this.visible != this.visible;
        // todo: lijkt niet te werken!
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

}

function PlayMemory (playerNames, cardNames) {
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

/* schud de kaartjes*/
/* leg kaartjes op beginpositie*/
   this.shuffle = function shuffle(array) {
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


/* selecteer beginspeler */
    var players = this.createPlayers(playerNames);
    var positions = this.createPositions(cardNames);
    var firstCard = true;
    this.shuffle(positions);
    this.shuffle(players);
    this.getCardName = function (index){
        return positions[index].getCard().getCardName();
    }

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

    this.processPosition = function (selectedPosition){
        console.log ("gekozen kaart:", selectedPosition.getCard().getCardName());
        console.log ("is dit de eerste kaart", firstCard);
        /*controleer of de speler de eerste of de tweede kaart aanklikt */
        if (firstCard) {/*dit gaat nog mis, als je this. erbij gebruikt  */
            console.log ("this.firstCard = true");
            selectedPosition.getCard().turn();
            var card1 = selectedPosition.getCard().getCardName();
            console.log("keuze 1", card1);
            firstCard = false;
            console.log ("bij false schakelt hij naar tweede kaart:", firstCard);
        }
        else {
            console.log ("is het kaartje zichtbaar", selectedPosition.getCard().isVisible());
            //todo: turn lijkt niet te werken.?
            /* controleer of het kaartje al omgedraaid is */
            if (selectedPosition.getCard().isVisible()) {
                console.log ("kaart al gekozen");
                }
            else {
                /* draai het kaartje om */
                selectedPosition.getCard().turn();
                var card2 = selectedPosition.getCard().getCardName();
                console.log("keuze 2", card2);
                /* controleer of kaartje 1 hetzelfde is als kaartje 2 */
 //               if card1 == card2 {
 //                   console.log ("twee gelijke kaarten");
  //                  }
  //              this.firstCard = true; // is dit hier nodig, nog checken. ligt er aan naar welke plek je zo terug gaat.
                }
            }
    }










        /* geef huidige speler een punt */
        /* wacht 5 seconden */
        /* haal beide kaartjes weg */
            /* controleer of alle kaartjes weggehaald zijn */
//            if alle kaartjes zijn weggehaald
            /* benoem een winnaar */
            /* vraag of ze het nog een keer willen spelen */
//            }
//            else {
            /* nieuwe beurt */
            /* firstCard = true*/
//           }
//        }
//        else {
        /* wacht 5 seconden */
        /* draai beide kaartjes om (terug)*/
        /* wissel speler */
        /* nieuwe beurt */
//        }
//  }
}

