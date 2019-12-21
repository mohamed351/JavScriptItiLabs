//script for local storage
//mohamed beshri amer

//#########################################

//get from localstorage
var mylocalStorage = window.localStorage;       

playerArray = JSON.parse( mylocalStorage.getItem("player"));


function Players(playerName, level){
    this.playerName =playerName;
    this.level = level;
    this.score = 0; 
}


document.getElementById("btn-start").onclick =function(){
    var playerName = document.getElementById("player-name").value;
    var level  = document.getElementById("player-level").value;
     newplayer =new Players(playerName,level);
     playerArray.push(newplayer);
    mylocalStorage.setItem("player",JSON.stringify(playerArray));
  
    window.location.href =`game.html?name=${newplayer.playerName}&score=${newplayer.score}&level=${newplayer.level}`


}















