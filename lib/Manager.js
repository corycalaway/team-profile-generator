const fs = require("fs");
// const {questionsManager, questionsEngineer} = require('../Index')
// Manager class porpertiesk and methods, extends employee class
class managerInfo {
    constructor(officeNumber) {

        
        this.officeNumber = officeNumber
        console.log(officeNumber)
    // officeNumber, getRole() - Overridden to return 'Manager'
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