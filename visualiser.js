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
Visualiser.prototype.createScoreboard = function(players){
    var scoreboard = document.createElement("table");
    scoreboard.class = "scoreboard";
    var body = document.getElementsByTagName("body")[0];
    for(var i = 0; i<players.length;i++){
        var row = scoreboard.insertRow(-1);
        var cellForName = row.insertCell();
        cellForName.innerHTML = players[i].getName();
        cellForName.class = "name";
        var cellForScore = row.insertCell();
        cellForScore.innerHTML = players[i].getScore();
        cellForScore.id = "playerscore" + i;
        cellForScore.class = "score";
    };
    body.insertBefore(scoreboard,body.firstChild);
};
Visualiser.prototype.updateScoreOfActivePlayer = function (playerIndex,score) {
    document.getElementById("playerscore" + playerIndex).innerHTML = score;
    }

Visualiser.prototype.createMemoryBoard = function(positions){
    var numberOfColumns = 6;
    var memoryBoard = document.createElement("div");
        memoryBoard.class = "board container-fluid";
    for (var i=0; i<(positions.length/numberOfColumns);i++){
        var row = document.createElement("div");
        row.class = "row";
        memoryBoard.appendChild(row);
        for (var j=0; j<numberOfColumns;j++){
            var position = document.createElement ("div");
            position.class = "position col-md-2";
            position.innerHTML = '<img onclick="game.selectPosition((j*(i+1)))" src="images/achterkant.jpg" class="memorykrt">';
            row.appendChild(position);
        }

    }
    document.getElementsByTagName('body')[0].appendChild(memoryBoard);
}


//    <div class="row" >
//            <div class="position col-md-2"> </div>
//            <div class="position col-md-2"><img onclick="game.selectPosition(1)" src="images/achterkant.jpg" class="memorykrt"></div>