counterTitle();
function counterTitle()
{
   
  var id1= setInterval(() => {
       counter++;
       document.title=counter;
       if(counter == 10){
            clearInterval(id1);
       }
   }, 1000);
 

}
function Employees(empName, empDeparment, empSalary){
    this.employeeName = empName;
    this.employeeDepartment = empDeparment;
    var employeeSalary = empSalary;
    console.log(typeof(this));
    this.GetSalary = function(){
        return employeeSalary;
    }
    this.SetSalary = function(salary){
        employeeSalary = parseInt(salary);
    }
    this.toString = function()
    {
        return `EmployeeName :${this.employeeName} and Employee Department: ${this.employeeDepartment} and EmployeeSalary: ${employeeSalary}`;
    }

}
function employeeListInitalization(){
    var empArray =[];
   
   while(empArray.length <5)
   {
   var empInfo = prompt("Please Enter the Information about Employees Name,Department,Salary");
   console.log(empInfo);
   if(empInfo !=null){
 
     var array = empInfo.split(",");
     empArray.push(new Employees(array[0],array[1],parseInt(array[2])));

   }
  }
return empArray;

}
function employeesSort(elements)
{
     console.log(elements);
    elements.sort(function(a,b){
        if(a.empDeparment < b.empDeparment)
        return -1;
        else if(a.empDeparment >b.empDeparment)
        return 1;
        else
        {
            if (a.GetSalary() > b.GetSalary())
            {
                return -1;
            }
            else if(a.GetSalary() <b.GetSalary())
            {
                return 1;
            }
            else
            {
                   
                return 0;
            }
        }

    });

}

function employeesFilter(emp,greaterThan) {
   var emp = emp.filter(function(a){
       return a.GetSalary()>parseInt( greaterThan);

   }); 
   return emp;

}
function FindDuplication(e)
{
    var elements =[e[0].employeeDepartment];
   for(i of e){
     if(!elements.includes(i.employeeDepartment))
        elements.push(i.employeeDepartment);
   }
  return elements;

}
function FindMax(elements){
 var helper = FindDuplication(elements);
 var maxArray =[];
   for(i of helper){
    var filter = elements.filter(function(a){
        return a.employeeDepartment == i;
    });
    var max = filter.reduce(function(a, b) {
    return Math.max(a.GetSalary(), b.GetSalary());});
   maxArray.push(max);
    
   }

   for(i of maxArray){
       console.log(i.toString());
   }
   return maxArray;

}
