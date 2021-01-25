const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeGitHub) {
        super(employeeName, employeeId, employeeEmail)

        this.employeeGitHub = employeeGitHub;
    }

    getGihub(){

    }

    getRole()
    {

    }

}

module.exports = Engineer;