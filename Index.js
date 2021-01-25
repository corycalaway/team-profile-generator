const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");

class Aplication {
  constructor(managerData) {
    this.manager;
    this.managerData = [];
  }

  startApp() {
    this.manager = new Employee();

    inquirer
      .prompt({
        type: "text",
        name: "employeeName",
        message: "Please enter Managers name",
      })
      .then(({ employeeName }) => {
        this.manager = new Employee(employeeName);
        console.log(employeeName)

        this.managerData.push(employeeName)
        console.log(this.managerData)
        this.employeeIdQuestion
      });
  }

  getEmployeeName() {
    // this.managerName.push(new Employee().getEmployeeName())
    // // .then(
    // .then(() => {
    //     // this.managerData.push(managerName)
    // console.log(this.managerName)
    // this.employeeIdQuestion()
  }

  employeeNameQuestion() {}

  employeeIdQuestion() {
    
    this.managerId = new Employee().getEmployeeId();
  }
}

// function structureApp() {
//     this.managerData = [];

// }
// sets manager Info to equal employeeName
new Aplication().startApp();

// .then(savedData => {
//     console.log(savedData)

// })

// }

// structureApp();
