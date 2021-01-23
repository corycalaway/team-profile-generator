// intern class poperties and methods, this extends Employee
class Intern {
    constructor(internName, internId, internEmail, internSchool) {

        this.internName = internName;
        this.internId = internId;
        this.internEmail = internEmail;
        this. internSchool = internSchool;
        //school, getSchool(), gerRole()- overridden to return intern
    }
}

module.exports = Intern;