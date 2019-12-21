var myimage1 =document.images
console.log(myimage1); //one way

var myimages2 = document.getElementsByTagName("img");
console.log(myimages2);
var querySelector = document.querySelectorAll("select option");

console.log(querySelector);


console.log(document.getElementsByClassName("fontBlue BGrey"));

console.log(document.getElementsByTagName("p"));


document.getElementById("getthefirst").onclick = function(e){

    //get the second 
   var tagElement = document.getElementsByTagName("table")[1];
   var element2 = tagElement.querySelectorAll("tr td a")
   

   for(i in element2){
     
    element2[i].onclick = function(e){
        e.preventDefault();
        this.href="#";

    };
   }

 

}



var element3= document.querySelectorAll("[type='checkbox']:checked");
console.log(element3)






