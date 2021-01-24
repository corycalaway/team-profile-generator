const fs = require("fs");
const employeeInfo = require('./Employee')
// // intern class poperties and methods, this extends Employee
class internInfo extends employeeInfo {
    constructor(employeeName, employeeId, employeeEmail, internSchool) {
        super(employeeName, employeeId, employeeEmail)
     
        this.internSchool = internSchool;
        console.log(employeeName, employeeId, employeeEmail, internSchool)
        //school, getSchool(), gerRole()- overridden to return intern
    }
}

module.exports = internInfo;

// module.exports = (internInfo) => {
//     const {employeeName, employeeId, employeeEmail, employeeSchool} = internInfo

//     console.log(internInfo)
// }