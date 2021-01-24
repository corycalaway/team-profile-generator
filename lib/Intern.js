const fs = require("fs");
// // intern class poperties and methods, this extends Employee
class internInfo {
    constructor(internName, internId, internEmail, internSchool) {

        this.internName = internName;
        this.internId = internId;
        this.internEmail = internEmail;
        this. internSchool = internSchool;
        console.log(internName, internId, internEmail, internSchool)
        //school, getSchool(), gerRole()- overridden to return intern
    }
}

module.exports = internInfo;

// module.exports = (internInfo) => {
//     const {employeeName, employeeId, employeeEmail, employeeSchool} = internInfo

//     console.log(internInfo)
// }