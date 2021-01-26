const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require('./Employee')


class Intern extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeSchool) {
        super(employeeName, employeeId, employeeEmail)

        this.employeeSchool = employeeSchool;
    }

    getSchool() {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'employeeSchool',
                message: 'Enter Employees School.'
            }
        ]).then(answer => {
            return this.employeeGitHub = answer;
        })
    }
    getRole()
    {

    }

}

module.exports = Intern;
