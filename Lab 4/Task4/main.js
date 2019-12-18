var counter=0;

var employeesArray = employeeListInitalization();
console.table(employeesArray);
employeesSort(employeesArray);
console.table(employeesArray);
for( i  of employeesArray){
    console.log(i.toString());
}
var ste = employeesFilter(employeesArray,2000);
for(i of ste){
    console.log(i.GetSalary());
}





