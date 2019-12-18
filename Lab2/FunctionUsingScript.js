function sumOfTwo(number1,number2){
    return number1+number2;
}
function convertName(name){
   name = name.split(" ");
   var newString ="";
   for(i of name){
       
        newString += i[0].toUpperCase() + i.toLowerCase().substring(1);
        newString +=" ";
   }
   return newString;

    
}
function largInputString(word){
    word = word.split(" ");
    var largest =word[0].length;
    var stri=word[0];
    for(var i =0;i<word.length;i++){
        if(largest <word[i].length){
            largest = word[i].length;
            stri =word[i];
           
        }
    }
   return stri;
    
}
function myRandomValue(){
    var rand = Math.random();
    return parseInt(rand*10);

}
function bonusSum() {
    var sumElments =0;
    for(i of arguments)
        sumElments+=i;
    
    return sumElments;

}
function stringSort(word){
    var newString ="";
   for(i of word.split("").sort())
   {
      newString+=i;
   }
   
   return newString;
}