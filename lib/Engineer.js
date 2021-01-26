const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeGitHub) {
        super(employeeName, employeeId, employeeEmail)

        this.employeeGitHub = employeeGitHub;
    }

    getGitHub(){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'employeeGitHub',
                message: 'Enter GitHub username.'
            }
        ]).then(answer => {
            return this.employeeGitHub = answer;
        })
    }

    getEmployeeRole()
    {
        return 'Engineer'
    }

}

module.exports = Engineer;