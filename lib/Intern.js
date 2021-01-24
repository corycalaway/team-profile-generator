const fs = require("fs");
// // intern class poperties and methods, this extends Employee
class internInfo {
    constructor(internSchool) {

     
        this. internSchool = internSchool;
        console.log(internSchool)
        //school, getSchool(), gerRole()- overridden to return intern
    }
}

module.exports = internInfo;

// module.exports = (internInfo) => {
//     const {employeeName, employeeId, employeeEmail, employeeSchool} = internInfo

//     console.log(internInfo)
// }