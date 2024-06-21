const names = [];
let addEmployee = true;

while (addEmployee) {
  let employeeName;

  while (!employeeName) {
    employeeName = prompt('Please provide the employee name name');
  }

  names.push(employeeName);

  addEmployee = confirm('Would you like to add another employee?');
}

console.log(names);