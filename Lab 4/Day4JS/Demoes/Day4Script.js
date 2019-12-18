//**********Javascript Objects
//1-Language Objects (String,Array,Date,Math,Number)
//2-User defined Object (Anonymouse Object , Object from User Defined Class)
//what is JSON ? JSON.stringfy(), JSON.parse()
//3-Browser Objects
//4-DOM or HTML Objects

// console.log(this);
// var userName= prompt("enter ur name ","type uer name here");
// var flag=confirm("R U sure");

// windowObject=window.open("smallwindow.html","","width=200px,height=300px");


//////// Classes in javascript === function with calling new

//class --> function
function Student(id=0,userName="Anonymouse",department="SD")
{
    //var --> private
    //this--> public
    //if prevent calling as a function
    var _id=id;
    this.userName=userName;
    this.department=department;
    //getter
    this.getID=function(){return _id;}
    //setter
    this.setID=function(value){
        _id=value;
    }

    //override
    this.toString=function(){
        return "ID : "+ _id +" Name :"+this.userName;
    }



}

//Calling
var student_1=new Student(1,"eman");
var student_2=new Student(2,"mirah");


// Element.css({color:ReadableStream,bc:blue})

//insert --> HTML
var students=[];
students.push(new Student(1,"eman","SD"));
students.push(new Student(2,"mona","SD"));
students.push(new Student(3,"ahmed","EL"));
students.push(new Student(4,"hala","OS"));
students.push(new Student(5,"ali","SD"));

// console.table(students,["userName","department"]);

students.sort(function(a,b){
    
    if(a.department>b.department) return 1;
    else if (a.department<b.department) return -1;
    else {
            if(a.userName.toLowerCase()>b.userName.toLowerCase()) return 1;
            else if(a.userName.toLowerCase()<b.userName.toLowerCase()) return -1;
            else return 0;
    }
});//sort

// console.table(students,["userName","department"]);














//Browser objects
//window.open
//alert , prompt , confirm
//timers

//Timers, time --> ms

// setInterval("JS code inside string",time MS);
// setInterval("console.log('hello');alert();jsdahgjh;asjdhkjas",3000);
// var id=setInterval(function(){
//     console.log("Heloooooo");
// },3000);
//  var id=setTimeout(function(){
//     console.log("Heloooooo");

//  },2000);
// clearInterval(id);
//clearTimeout(id);

//title
document.title=0;
var counter=1;
setInterval(function(){
    // window.document.title
    window.document.title=counter++;
},1000);









