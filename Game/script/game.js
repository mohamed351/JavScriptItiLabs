
window.addEventListener("load",function(){
    


  
  var element = document.getElementById("game");
    InitalGame();
    DrawBoxs(8,5,element);

  var ball =  document.createElement("i");
  ball.classList.add("color1");
  ball.classList.add("fas");
  ball.classList.add("fa-basketball-ball");
  ball.id ="moveItem";
 document.getElementById("row(0)-column(1)").append(ball);


 var ball =  document.createElement("i");
 ball.classList.add("color1");
 ball.classList.add("fas");
 ball.classList.add("fa-basketball-ball");
 ball.id ="";
document.getElementById("row(7)-column(1)").append(ball);


/*
var ball =  document.createElement("i");
ball.classList.add("color1");
ball.classList.add("fas");
ball.classList.add("fa-basketball-ball");
ball.id ="";
document.getElementById("row(1)-column(0)").append(ball);
*/


var ball =  document.createElement("i");
ball.classList.add("color1");
ball.classList.add("fas");
ball.classList.add("fa-basketball-ball");
ball.id ="";
document.getElementById("row(7)-column(2)").append(ball);


var ball =  document.createElement("i");
ball.classList.add("color1");
ball.classList.add("fas");
ball.classList.add("fa-basketball-ball");
ball.id ="";
document.getElementById("row(7)-column(3)").append(ball);

var ball =  document.createElement("i");
ball.classList.add("color1");
ball.classList.add("fas");
ball.classList.add("fa-basketball-ball");
ball.id ="";
document.getElementById("row(7)-column(4)").append(ball);



   
   
   



    
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

setInterval(function(){

  var element =  document.getElementById("moveItem").parentElement;
  var row = element.getAttribute("row");
  var column =element.getAttribute("column");

var rowChecker = document.getElementById("row("+(parseInt(row)+1)+")-column("+column+")");
  var column = element.getAttribute("column");
  if(row <7){
  if(rowChecker.innerHTML =="&nbsp;"){
  row++;
  console.log(row);
  document.getElementById("row("+row+")-column("+column+")").innerHTML =element.innerHTML;
  element.innerHTML ="&nbsp;";
  console.log("row("+(parseInt(row)+1)+")-column("+column+")");
  }
  else
  {
    moveItem.parentElement.children[0].id ="";
    //generate new one
  }
  //delete id and generate new one With id
}





},1000);
function generateRandoNumber(greateNumber, LowNumber){
    var rand =parseInt( Math.random()*10);
    if(rand<number1 && rand>number2)
    return rand;
    else
    generateRandoNumber(greateNumber,LowNumber);
}
