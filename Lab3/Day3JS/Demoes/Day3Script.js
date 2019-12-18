// callback=filterFunction;
var filterFunction=function(item ){ return item<60;}

// function filterFunction(item,index)
// {
//         console.log(item,index);
//         return item>60;
// }
/***********String  */
var userName="ahmed"; //primitive
var studentName=new String("Mohammed"); //object

/**********  Array */
var numbers=[2,1,4,11];// object  -> shortcut
 var numbersVer2=new Array(2,1,4);

var grades=[100,66,56,90 ,52];
var mixed=[1,3,2,true,"eman"];
var names=["ahmed","mona","Eman","Mirah","mohammed","hend","eman"];

//problem sparse Array
numbers[10]=44; 

//looping    console.table and in operator
//for , for in , for of ,foreach
// for(i=0;i<numbers.length;i++)
for(i in numbers)
{
    console.log(numbers[i]);
}

// filter
var fileredArray=grades.filter(filterFunction);
//anonymouse function
fileredArray=grades.filter(function(item){
    return item>60;
});
console.table(names);

names.sort(function(a,b){
    a=a.toLowerCase();
    b=b.toLowerCase();
    if(a>b) return 1;
    else if(a<b) return -1;
    else return 0
});//sort
console.table(names);










