var image  =document.images[0];
var btnNext = document.querySelector(".btn-next");
var btnprev = document.querySelector(".btn-prev");
var elementCounter = document.querySelector(".counterimage");
var counter =1;
btnNext.onclick =function(){
   if(counter<17){
      counter++;
      image.src = "img/"+counter+".png";
      elementCounter.innerHTML =counter+"/17"
   }

  
 

}
btnprev.onclick = function(){
   if(counter>1){
      counter--;
      image.src = "img/"+counter+".png";
      elementCounter.innerHTML =counter+"/17"
     
     
   }
 
}
