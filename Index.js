const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");

class Aplication {
  constructor(roleAssign) {
    this.employeeInfo;
    this.employeeData = [];
    this.roleAssign = '';
  }

  startApp() {


    inquirer
      .prompt({
        type: "text",
        name: "employeeName",
        message: "Please enter Managers name",
      })
      .then(({ employeeName }) => {

        // creates a manager
        this.employeeInfo = new Manager(employeeName);
        
        // pushes name to manager array
        this.employeeData.push(employeeName)
        console.log(this.employeeData)
        this.roleAssign = 'Manager'
        this.employeeRoleQuestion()
      });
  }

 

  employeeNameQuestion() {}

  // get employees id
  employeeIdQuestion() {
    console.log(this.employeeInfo)

    // uses employee to call getemployeeid function
    this.employeeInfo.getEmployeeId()
    // this.managerId = new Employee().getEmployeeId();
    .then(({ employeeId }) => {
        console.log(employeeId)
        // creates a manager
        
        // pushes name to manager array
        this.employeeData.push(employeeId)
        console.log(this.employeeData)
        
        // directs to get email function
        this.employeeEmailFunction()
    
     
    })
  }

  employeeEmailFunction() {
    // gets email of employee
      this.employeeInfo.getEmployeeEmail()

      .then(({ employeeEmail }) => {
       
        this.employeeData.push(employeeEmail)
      console.log(this.employeeData)

      console.log(this.roleAssign)

      // call for individual items based on role. 
      if(this.roleAssign === 'Manager') {
        
        this.managerQuestion();

      } else if (this.roleAssign === 'Engineer') {

      } else if (this.roleAssign === 'Intern') {

      }

      })
  }

  employeeRoleQuestion() {
    console.log(this.employeeInfo)

    // if role is assigned 'Manager'
    if (this.roleAssign === 'Manager') {
        this.employeeIdQuestion()
    
    // after first rotation role wont be assigned to manager
    } else {
        
        inquirer
            .prompt({
                type: 'list',
                name: 'employeeChoice',
                message: 'Would you like to add any employees to team.',
                choices: ['Engineer', 'Intern', 'Complete']
            }).then(answer => {

                console.log(answer)

                // if (answer.employeeChoice === 'Manager') {
                //     console.log('MANAGER')

                // } else 
                if (answer.employeeChoice === 'Engineer') {
                    console.log('ENGINEER')
                    
                } else if (answer.employeeChoice === 'Intern') {
                    console.log('INTERN')
                } else {
                    console.log('Complete')
                }
                // creates a manager
                
                // pushes name to manager array
                // this.employeeData.push(employeeId)
                // console.log(this.employeeData)
        
             
              });



    //     if (this.roleAssign === 'Engineer') {

    // } else if (this.roleAssign === 'Intern') {

    // } else {

    }
    // uses employee to call getemployeeid function
    // this.employeeInfo.getEmployeeRole()
    // // this.managerId = new Employee().getEmployeeId();
    // .then(({ employeeId }) => {

    //     // creates a manager
        
    //     // pushes name to manager array
    //     this.employeeData.push(employeeId)
    //     console.log(this.employeeData)

     
    //   });
  }

  managerQuestion() {

    this.employeeInfo.getOfficeNumber()

    
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
