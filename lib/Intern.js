const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require('./Employee')


class Intern extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeSchool) {
        super(employeeName, employeeId, employeeEmail)

        this.employeeSchool = employeeSchool;
    }

    getSchool() 
    {

    }
    getRole()
    {

    }

}

module.exports = Intern;
