const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require('./Employee')


class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail, officeNumber) {
        super(employeeName, employeeId, employeeEmail)

        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
console.log('made it')
    }

    getRole()
    {

    };

}

module.exports = Manager;
