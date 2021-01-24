const fs = require("fs");
const employeeInfo = require('./Employee')
const inquirer = require('inquirer');
const choices = require('./Choices')
// const {questionsManager, questionsEngineer} = require('../Index')
// Manager class porpertiesk and methods, extends employee class
class managerInfo {
    constructor(officeNumber) {
        // super(employeeName, employeeId, employeeEmail)
        // employeeName, employeeId, employeeEmail, 
        
        this.officeNumber = officeNumber;
        console.log(officeNumber)
    // officeNumber, getRole() - Overridden to return 'Manager'
    }

    managerPrompt() {
        return inquirer.prompt([
            {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter employee office number.'
        }
        ])
        .then(activateChoices => {
           new managerInfo(activateChoices)
          

               
                })
            }
    // getManagerInfo(){
    //     console.log(this.managerName, this.managerId, this.managerEmail, this.officeNumber)
    //     return 'pass'
    // }
}


 module.exports = managerInfo;

// module.exports = (managerInfo) => {
//     const {employeeName, employeeId, employeeEmail, employeeNumber} = managerInfo
// // create manager new manager
//     console.log(employeeName, employeeId, employeeEmail, employeeNumber)
// }