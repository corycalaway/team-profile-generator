const fs = require("fs");
// const {questionsManager, questionsEngineer} = require('../Index')
// Manager class porpertiesk and methods, extends employee class
// class Manager {
//     constructor(managerName, managerId, managerEmail, officeNumber) {

//         this.managerName = managerName;
//         this.managerId = managerId;
//         this.managerEmail = managerEmail;
//         this.officeNumber = officeNumber
//     // officeNumber, getRole() - Overridden to return 'Manager'
//     }

//     getManagerInfo(){
//         console.log(this.managerName, this.managerId, this.managerEmail, this.officeNumber)
//         return 'pass'
//     }
// }

// module.exports = Manager;

module.exports = (managerInfo) => {
    const {employeeName, employeeId, employeeEmail, employeeNumber} = managerInfo
// create manager new manager
    console.log(employeeName, employeeId, employeeEmail, employeeNumber)
}