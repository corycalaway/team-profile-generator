const fs = require("fs");
const inquirer = require('inquirer');
const Employee = require('./Employee')


class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail, officeNumber) {
        super(employeeName, employeeId, employeeEmail)

        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter Employee office number.'
            }
        ]).then(answer => {
            return this.officeNumber = answer;
        })
        
        
    }

    getEmployeeRole()
    {
        return 'Manager'
    }

}

module.exports = Manager;
