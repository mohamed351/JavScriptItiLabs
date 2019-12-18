
function sortMyArray(array){
   
    array.sort(function(a,b){
        return a-b;
    });
    console.log("the Sort of ascending way :", array);
 
    array.sort(function(a,b){
        return b-a;
    });
    console.log("the sort of descending way : ",array);
    
}
function FilterMyArray(){

    var myArrayOfFiler = [2,3,1,15,16,5,7,6];
    myArrayOfFiler=  myArrayOfFiler.filter(function(items){
        return items >5;
    });
    console.log(myArrayOfFiler);

}
function CreateAnObject(){
    var student = {firstName:"Mohamed", 
    middleName :"Beshri", 
    lastName:"Amer",
    printData(){
        console.log(this.firstName + " "+this.lastName);
        return this.firstName + " "+this.lastName;
    },
    printData2(){
        console.log(this["firstName"] + " " + this["lastName"]);
        return this["firstName"] + " " + this["lastName"];
    },
    getOnlyFirstName(){
        return this.firstName;
    }

 };
 
 student.age =20; //on the fly
 console.log("The Element on the fly :" +student.age);
 delete student.age;
 console.log("Now is Deleted  :");
 //console.log(age);
    console.log("Print 1 : ",student.printData());
    console.log("Print 2 : ", student.printData2());
    console.log("Get First Name only  First Name : ", student.getOnlyFirstName());
   
   
}
function ToFillRandom(lenght){
    var myRandomNumbers =[];
   
     
    while(myRandomNumbers.length <lenght){
   var mathCal = parseInt(Math.random()*10);
    if(!myRandomNumbers.includes(mathCal)){
        myRandomNumbers.push(mathCal);
    }
  }
   
    
  
    
    console.log(myRandomNumbers);

    return myRandomNumbers;
}

