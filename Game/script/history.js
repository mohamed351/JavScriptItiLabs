function Players(playerName, level){
    this.playerName =playerName;
    this.level = level;
    this.score = 0; 
    
   
}


window.addEventListener("load",function(){

   players = window.localStorage;
   if(players != null){

    var array = players.getItem("player");
    var str = JSON.parse(array);
    
    for(i in str)
    {
        var row = document.createElement("tr");
        CreateNew(JSON.parse( str[i]),row);
       document.getElementById("game-player").append(row);

       

    }


    
   }

   else
   {

   }
   function CreateNew(player, row){
 
     for( i in player){
      
      var ele=  document.createElement("td");
         ele.innerText = player[i];
         row.append(ele);
      
        
     }
  
    

   }
});