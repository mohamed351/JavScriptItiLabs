
SubmitData();
initialTable();
var counter=-1;
var studentArray= [];

function Student(studentName,studentGrade,department){
 this.studentName = studentName;
 this.studentGrade = studentGrade;
 this.department = department;
  var  _id= ++counter;
 this.ToString = function()
 {
   var element = this;
   
    var trObject =  document.createElement("tr");
     for(i in this){
      if(typeof(this[i]) != "function"){
      var tdObject= document.createElement("td");
      tdObject.innerText = this[i];
      trObject.append(tdObject);
      trObject.classList.add(department);
      }
    
     }
     
     var buttonElement = document.createElement("a");
      buttonElement.onclick = function(c){
        bootbox.confirm("Are you sure you want to delete Student", function(e) {
           if(e == true){
              this.studentName = "";
               this.studentGrade = "";
               this.department ="";
              studentArray.splice( studentArray.findIndex(function(a){
                  
                      return a.GetID() ==_id;
                  
                  
              }),1);
                
             c.target.parentElement.parentElement.remove();
           } 
        });
      }
     buttonElement.innerText ="Delete";
     buttonElement.classList.add("btn");
     buttonElement.classList.add("btn-danger");
     tdObject = document.createElement("td");
    tdObject.append(buttonElement);
  
    trObject.append(tdObject);
    return trObject;
     
    
     
 }
 this.printHeader = function(){
    var theadobject = document.createElement("thead");
    var trhead = document.createElement("tr");
    for(i in this){
        if(typeof(this[i]) !="function"){
        var thobject = document.createElement("th");
        thobject.innerText =i;
        trhead.append(thobject);   
        }
    }
    var thobject = document.createElement("th");
    trhead.append(thobject);
    theadobject.append(trhead);
    return theadobject;
    
  
 }
 this.GetID=function(){
     return _id;
 }

}



function SubmitData(){
  
 var button= document.getElementById("btn-add");
 
 var tabl =document.getElementById("studentbody"); 
  button.addEventListener("click",function(){
   
   var dept = document.querySelector("[name='department']:checked").value;
   var txtName = document.getElementById("studentName").value;
   var grade = document.getElementById("studentGrade").value;
   var student = new Student(txtName,grade,dept);
   studentArray.push(student);
   tabl.append(student.ToString());
  

   
  });

}
function initialTable(){
  var std = new Student();
   document.getElementById("studentTable").append(std.printHeader());
}







