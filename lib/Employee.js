const fs = require("fs");
const inquirer = require("inquirer");

// employee class also the head class
class Employee {
  constructor(employeeName, employeeId, employeeEmail) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.employeeEmail = employeeEmail;
  }

  // collects input for employee name
  getEmployeeName() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "employeeName",
          message: "Enter Employee name",
        },
      ])
      .then((answer) => {
        return (this.employeeId = answer);
      });
  }

  getEmployeeId() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "employeeId",
          message: "Enter Employee ID",
        },
      ])
      .then((answer) => {
        return (this.employeeId = answer);
      });
  }

  getEmployeeEmail() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "employeeEmail",
          message: "Enter Employee Email",
        },
      ])
      .then((answer) => {
        return (this.employeeEmail = answer);
      });
  }

  getEmployeeRole() {
    return "Employee";
  }
}

module.exports = Employee;
