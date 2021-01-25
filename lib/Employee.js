const fs = require("fs");
const inquirer = require('inquirer');

// employee class also the head class
class Employee {
    constructor(employeeName, employeeId, employeeEmail) {

    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.employeeEmail = employeeEmail;
}


// collects input for employee name
getEmployeeName() {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Enter Employee name'
        }
    ])

    // .then(({employeeName}) => {
    //     this.employeename = employeeName
        
    // })

}

getEmployeeId(){

    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter Employee ID'
        }
    ])

    // .then(({employeeId}) => {
    //     this.employeeId = employeeId
        
    // })
}

getEmployeeEmail() {


}

getEmployeeRole() {

    return 'Employee'
}
}

module.exports = Employee;
// create employee class that has functions to call for individual prompts.
// once prompt is called return information

// create a function that initialized project.
// create a function that goes through and collects information from each of the classes this should not be the same as the function that contains the prompt.