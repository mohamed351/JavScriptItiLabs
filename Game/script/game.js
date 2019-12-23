
window.addEventListener("load",function(){
    
  score =0;
  var element = document.getElementById("game");
    InitalGame();
    DrawBoxs(8,5,element);

GenerateBall();

 
    
});

function InitalGame(){
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const score = urlParams.get('score');
    const level = urlParams.get('level');
    if(name == null ){
        window.location.href ="index.html";
    }
    document.getElementById("playerName").innerText = name;
    document.getElementById("playerScore").innerText = score;
    document.getElementById("playerLevel").innerText = level;
}




//if it has an element
document.body.addEventListener("keyup",function(a){
   
    if(a.keyCode == 37){
        
        
       var column= moveItem.parentElement.getAttribute("column");
       var row = moveItem.parentElement.getAttribute("row");
      var htmlElement = document.querySelector("[row='"+row+"'][column='"+column+"']");
      var theElement = document.querySelector("[row='"+row+"'][column='"+( parseInt( column)-1)+"']");
      var htmlInner =htmlElement.innerHTML;
      document.querySelector("[row='"+row+"'][column='"+column+"']").innerHTML ="&nbsp";
      if(column !=0){
     if(theElement.innerHTML == "&nbsp;")
       column--;

      }
      
       document.querySelector("[row='"+row+"'][column='"+column+"']").innerHTML =htmlInner;
      

        
    }
    else if(a.keyCode ==39){
        console.log("testing");
        var column= moveItem.parentElement.getAttribute("column");
       var row = moveItem.parentElement.getAttribute("row");
    var theElement = document.querySelector("[row='"+row+"'][column='"+( parseInt( column)+1)+"']");
      var htmlElement = document.querySelector("[row='"+row+"'][column='"+column+"']").innerHTML;
      document.querySelector("[row='"+row+"'][column='"+column+"']").innerHTML ="&nbsp";

      if(column !=4){
      if(theElement.innerHTML == "&nbsp;")
       column++;

      }
       document.querySelector("[row='"+row+"'][column='"+column+"']").innerHTML =htmlElement;
    }
    
    
});

function DrawBoxs(sizeofRow,sizeOfCol, gameContainer )
{
  

    for(var i=0;i<sizeofRow;i++){
       
        var rowElement = document.createElement("div");
           rowElement.classList.add("row");
        for(var x=0;x<sizeOfCol;x++){
            
           var element = document.createElement("div");
          
            element.classList.add("box");
            element.classList.add("font-ball");
            
            element.id ="row("+i+")-column("+x+")"; ;
            element.innerHTML ="&nbsp";
            element.setAttribute("column",x);
            element.setAttribute("row",i);
            
            rowElement.append(element);
            
           

        }
        gameContainer.append(rowElement);
    }



}

var timer = setInterval(function(){

 var element2 =document.getElementById("moveItem");
 if(element2 == null){
    GenerateBall();
 }
 
  var element =  element2.parentElement;
 
  var row = element.getAttribute("row");
  var column =element.getAttribute("column");

var rowChecker = document.getElementById("row("+(parseInt(row)+1)+")-column("+column+")");
  var column = element.getAttribute("column");
  if(row <7){
  if(rowChecker.innerHTML =="&nbsp;"){
  row++;

  document.getElementById("row("+row+")-column("+column+")").innerHTML =element.innerHTML;
  element.innerHTML ="&nbsp;";

  }
  else
  {
    
    var colorChecker = document.getElementById("moveItem");
    colorChecker.parentElement.children[0].id="";
    CheckTheRow(colorChecker);
    CheckTheColumn(colorChecker);
    if(document.querySelector(".row").getElementsByTagName("i").length >0){
        GameOverScreen();
      }
    GenerateBall();
    
  }
  //delete id and generate new one With id
}
else
{
    var colorChecker = document.getElementById("moveItem");
    colorChecker.parentElement.children[0].id="";
    CheckTheRow(colorChecker);
    CheckTheColumn(colorChecker);
  if(document.querySelector(".row").getElementsByTagName("i").length >0){
    GameOverScreen();
  }
    GenerateBall();
}





},250);


//from w3schools // i have searched the random number between max and min
//i have made it a function using while loop but it is not like this 
//so i deleted and i have test thanks :) Mohamed Beshri Amer
function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function GenerateBall(){
  var row =0;
  var col=GetRandomNumber(0,5);
 var color = GetRandomNumber(1, 5);
  var ball =  document.createElement("i");
  ball.classList.add("color"+color);
  ball.classList.add("fas");
  ball.setAttribute("color",color);
  ball.classList.add("helloword2");
  ball.classList.add("fa-basketball-ball");
  ball.id ="moveItem";
 document.getElementById("row("+row+")-column("+col+")").append(ball);

}

function GameOverScreen(){
  var screen= document.getElementById("gameOverScreen");
  screen.classList.remove("gameOver-hide");
  clearInterval(timer);


    

}
function CheckTheRow(color){
   var mycolor = color.getAttribute("color");
   /*
   var row = color.parentElement.getAttribute("row");
   var column = color.parentElement.getAttribute("column");
   console.log(mycolor,row,column);
   */
    var el = color.parentElement.parentElement.querySelectorAll("[color='"+mycolor+"']");

   if(el.length >=4){
       for(i of el){
        i.parentElement.innerHTML ="&nbsp;"
       }
       score+=20;
       document.getElementById("playerScore").innerText =score;
   }
  


}
function CheckTheColumn(color){
    
 var column = color.parentElement.getAttribute("column");
 var row =  color.parentElement.getAttribute("row");
 var mainColor = color.getAttribute("color");
 var  ArrayOfDeletion =[];
 var repeated =0;
 for (var i = 0; i <8; i++) {
    var colu =document.getElementById("row("+i+")-column("+column+")").querySelector("i")
   if(colu !=null){
      if(colu.getAttribute("color") == mainColor){
        repeated++;
        ArrayOfDeletion.push(colu);
        if(repeated ==4){
          break;
        }
      }
      else
      { 
        ArrayOfDeletion =[];
        
          repeated =0;
      }
   }
  
 }
 
 if(ArrayOfDeletion.length ==4){
   for(i of ArrayOfDeletion){
    i.parentElement.innerHTML ="&nbsp;";
   }
   score+=10;
   document.getElementById("playerScore").innerText =score;
 }



}
