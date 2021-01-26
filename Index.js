const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");

class Aplication {
  constructor() {
    this.employeeInfo = []
    this.employeeData = [];
    this.caller = '';
  }

  startApp() {

    // calls manager class
    this.caller = new Manager()
    //this.employeeInfo = new Manager(answer.employeeName, answer.employeeId, answer.employeeEmail, answer.officeNumber)

     this.caller.getEmployeeName()

    .then((answer) => {
       this.employeeInfo.push(answer.employeeName)
      // return console.log(this.employeeInfo)
      return this.caller.getEmployeeId(answer)
    })
    .then((answer) => {
      this.employeeInfo.push(answer.employeeId)
      return this.caller.getEmployeeEmail(answer)
      
    })
     .then(answer => {
      this.employeeInfo.push(answer.employeeEmail)
      return this.caller.getOfficeNumber(answer)

    })
    .then(answer => {
      this.employeeInfo.push(answer.officeNumber)
      return  console.log(this.employeeInfo)

    })
    // .then(answer => {
      
    // })
    // .then((answer) => {
    //   return console.log(this.employeInfo)
    // })
    // .then((answer) => {
    //   // this.employeeInfo.push(answer.employeeName)
   
    //   return this.caller.getEmployeeId(answer.employeeName, answer.employeeId, answer.employeeEmail, answer.officeNumber)

    // }).then(answer => {
      
    //   // this.employeeInfo.push(answer.employeeId)
     

    //  return this.caller.getEmployeeEmail(answer.employeeName, answer.employeeId, answer.employeeEmail, answer.officeNumber)

    // })
    // .then(answer => {
    //   // this.employeeInfo.push(answer)

    //   return this.caller.getOfficeNumber(answer.employeeName, answer.employeeId, answer.employeeEmail, answer.officeNumber)



    // })
    // .then(answer => {
    //   // this.employeeInfo.push(answer3)
    //   return console.log(answer.employeeName, answer.employeeId, answer.employeeEmail, answer.officeNumber)
    // })


  //   return inquirer.prompt([
        
  //     {
  //         type: 'input',
  //         name: 'employeeName',
  //         message: 'Enter Employee name.'
  //     },
  //     {
  //         type: 'input',
  //         name: 'employeeId',
  //         message: 'Enter employee Id.'
  //     },
  //     {
  //         type: 'input',
  //         name: 'employeeEmail',
  //         message: 'Enter employee email.'
  //     },
  //     {
  //       type: 'input',
  //       name: 'officeNumber',
  //       message: 'Enter employee officeNumber.'
  //   },
     
  // ])   .then(answer => {
  //   console.log(answer)

  
  //     this.employeeInfo = new Manager(answer.employeeName, answer.employeeId, answer.employeeEmail, answer.officeNumber)
  //     console.log('yay')
  //     console.log(this.employeeInfo)
  //     console.log('yay')

  //    //this.employeeData.push(employeeName, employeeId, employeeEmail)
  //    this.employeeData.push(this.employeeInfo)
  //    console.log(this.employeeData)
  // })
  }
 
// prompt for employee name
  employeeNameQuestion() {
    console.log(this.employeeInfo)
    
    // uses employee to call getemployeeid function
    this.employeeInfo.getEmployeeName()
    // this.managerId = new Employee().getEmployeeId();
    .then(({ employeeId }) => {
        console.log(employeeId)
        // creates a manager
        
        // pushes name to manager array
        this.employeeData.push(employeeId)
        console.log(this.employeeData)
        
        // directs to get email function
        this.employeeIdQuestion()
    
     
    })

  }

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
                  this.roleAssign = 'Engineer'
                  this.employeeNameQuestion()
                    console.log('ENGINEER')
                    
                } else if (answer.employeeChoice === 'Intern') {
                  this.roleAssign = 'Intern'
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

    .then(({ officeNumber }) => {
      console.log(officeNumber)
      // creates a manager
      
      // pushes officenumber to manager array
      this.employeeData.push(officeNumber)
      console.log(this.employeeData)

      
      
  
   
  })
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
