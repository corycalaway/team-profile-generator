
// Manager class porpertiesk and methods, extends employee class
class Manager {
    constructor(managerName, managerId, managerEmail, officeNumber) {

        this.managerName = managerName;
        this.managerId = managerId;
        this.managerEmail = managerEmail;
        this.officeNumber = officeNumber
    // officeNumber, getRole() - Overridden to return 'Manager'
    }
}

module.exports = Manager;