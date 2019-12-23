//script for local storage
//mohamed beshri amer

//#########################################

//get from localstorage
var mylocalStorage = window.localStorage;
var playerArray  =[];
if(mylocalStorage.getItem("player")== null){
    
    window.localStorage.setItem("player",[]);
    mylocalStorage = window.localStorage;
    playerArray =[];
  
}
else
{
    
    console.log(playerArray);
   playerArray = JSON.parse( mylocalStorage.getItem("player"));
}
//;


function Players(playerName, level){
    this.playerName =playerName;
    this.level = level;
    this.score = 0; 
    
   
}


document.getElementById("btn-start").onclick =function(){
    var playerName = document.getElementById("player-name").value;
    var level  = document.getElementById("player-level").value;
     newplayer =new Players(playerName,level);
     console.log(typeof newplayer)
     playerArray.push(newplayer);
    mylocalStorage.setItem("player",JSON.stringify(playerArray));
  
    window.location.href =`game.html?name=${newplayer.playerName}&score=${newplayer.score}&level=${newplayer.level}`


}















