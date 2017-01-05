function startMemory (){
   var playerNames = ["Sjoerd", "Simone"];
   var cardNames = ["kaart1", "kaart2", "kaart3", "kaart4"];
   return new PlayMemory (playerNames, cardNames);
}

function Player(playerName){
   var playerName = playerName;
   var score = 0;
}

function Card(cardName){
    var cardName = cardName;
    var isVisible = false;
    this.getCardName = function (){
            return cardName;
    }
}

function Position(card){
    var card = card;
    var isOccupied = true;
    this.getCard = function (){
        return card;
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
    this.shuffle(positions);
    this.shuffle(players);
    this.getCardName = function (index){
        return positions[index].getCard().getCardName();
    }

/*speler kiest een kaart, klikt er op*/
/*controleer of er op die positie een kaart ligt*/

/*controleer of de speler de eerste of de tweede kaart aanklikt */
//  if keuzeNummer = 1 {
//    /* draai kaartje om*/
//  }
//  else {
  /* controleer of het kaartje al omgedraaid is */
  /* draai het kaartje om */
        /* controleer of kaartje 1 hetzelfde is als kaartje 2 */
//        if kaartje1=kaartje2 {
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

