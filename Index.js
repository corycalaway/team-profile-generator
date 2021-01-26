const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
// const {createHtml, generateData} = require('./lib/Launch')

class Aplication {
  constructor(answer) {
    this.employeeInfo = [];
    this.employeeData = [];
    this.caller = "";
    this.roleAssign = "Manager";
    this.completedData = "fail"
  }

  employeeRoleQuestion() {
    
     //console.log(this.employeeInfo);
    this.employeeData.push(this.caller);
    // this.caller = {};
    // console.log(this.employeeData)
    // console.log(this.caller)
    this.employeeInfo = []



    //  console.log(this.employeeData);
    inquirer
      .prompt({
        type: "list",
        name: "employeeChoice",
        message: "Would you like to add any employees to team.",
        choices: ["Engineer", "Intern", "Complete"],
      })
      .then((answer) => {
        console.log(answer);

        // if (answer.employeeChoice === 'Manager') {
        //     console.log('MANAGER')

        // } else
        if (answer.employeeChoice === "Engineer") {
          this.roleAssign = "Engineer";
          this.caller = new Engineer();

          return this.startApp();
        } else if (answer.employeeChoice === "Intern") {
          this.roleAssign = "Intern";
          this.caller = new Intern();
          return this.startApp();
        } else {
          this.writeFunction()
          // write code files
          // this.writeFunction();
        }
        // creates a manager

        // pushes name to manager array
        // this.employeeData.push(employeeId)
        // console.log(this.employeeData)
      });

    //     if (this.roleAssign === 'Engineer') {

    // } else if (this.roleAssign === 'Intern') {

    // } else {

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

  startAppManager() {
    this.caller = new Manager();
    return this.startApp();
  }

  startApp() {
    // calls manager class

    //this.employeeInfo = new Manager(answer.employeeName, answer.employeeId, answer.employeeEmail, answer.officeNumber)

    // gets the employee name
    this.caller
      .getEmployeeName()

      .then((answer) => {
        this.employeeInfo.push(answer.employeeName);
        // return console.log(this.employeeInfo)

        // gets employee id
        return this.caller.getEmployeeId(answer);
      })
      .then((answer) => {
        this.employeeInfo.push(answer.employeeId);

        // gets employee email
        return this.caller.getEmployeeEmail(answer);
      })
      .then((answer) => {
        return this.employeeInfo.push(answer.employeeEmail);
      })
      .then((answer) => {
        if (this.caller.getEmployeeRole() === "Manager") {
          // clears previous role
          this.roleAssign === "";

          console.log(answer.employeeName);
          // gets office number
          const [employeeName, employeeId, employeeEmail] = this.employeeInfo;
          this.caller = new Manager(employeeName, employeeId, employeeEmail);
          this.caller
            .getOfficeNumber()

            // pushes office number to array
            .then((answer) => {
              this.employeeInfo.push(answer.officeNumber);
              const [
                employeeName,
                employeeId,
                employeeEmail,
                officeNumber,
              ] = this.employeeInfo;
              this.caller = new Manager(
                employeeName,
                employeeId,
                employeeEmail,
                officeNumber
              );

              // return console.log(this.caller)
              // asks for aditional team members
              return this.employeeRoleQuestion();
            });

          // this.employeeInfo.push(answer.officeNumber)

          // if role is engineer

          // if engineer role
        } else if (this.caller.getEmployeeRole() === "Engineer") {
          // clears previous role
          this.roleAssign === "";

          console.log(answer.employeeName);
          // gets office number
          const [employeeName, employeeId, employeeEmail] = this.employeeInfo;
          this.caller = new Engineer(employeeName, employeeId, employeeEmail);
          this.caller
            .getGitHub()

            // pushes office number to array
            .then((answer) => {
              this.employeeInfo.push(answer.employeeGitHub);
              const [
                employeeName,
                employeeId,
                employeeEmail,
                employeeGitHub,
              ] = this.employeeInfo;
              this.caller = new Engineer(
                employeeName,
                employeeId,
                employeeEmail,
                employeeGitHub
              );

              // return console.log(this.caller)
              // asks for aditional team members
              return this.employeeRoleQuestion();
            });
        } else if (this.caller.getEmployeeRole() === "Intern") {
          // clears old role
          this.roleAssign === "";

          console.log(answer.employeeName);
          // gets office number
          const [employeeName, employeeId, employeeEmail] = this.employeeInfo;
          this.caller = new Intern(employeeName, employeeId, employeeEmail);
          return (
            this.caller
              .getSchool()

              // pushes office number to array
              .then((answer) => {
                this.employeeInfo.push(answer.employeeSchool);
                const [
                  employeeName,
                  employeeId,
                  employeeEmail,
                  employeeSchool,
                ] = this.employeeInfo;

                this.caller = new Intern(
                  employeeName,
                  employeeId,
                  employeeEmail,
                  employeeSchool
                );

                // return console.log(this.caller)
                // asks for aditional team members
                return this.employeeRoleQuestion();
              })
          );
        } else {
          // return this.writeFunction()
          this.writeFunction()
        }
      });
  }

  writeFunction() {
    // createHtml('testing')
    // .then(answer => {
    //   return console.log(answer)
    // })
    // let allObjects = ''
// console.log('test')
//     for (let i = 0; i < this.employeeData.length; i++) {
//        allObjects = this.employeeData[i]
      
      
//     }
    
//     console.log(allObjects)

    // let keys = Object.keys(this.employeeData)
    // console.log(keys)

    // let vals = Object.values(this.employeeData)
    // console.log(vals)

    let entries = Object.entries(this.employeeData)
    // let entries = Object.values(this.employeeData)
    // let entries = Object.keys(this.employeeData)
    // console.log(entries)
    console.log(entries [2])
    console.log(entries)
    console.log(JSON.stringify(entries [0] [1]))
    console.log(JSON.stringify(entries [0] [0]))

    let managerHtml = JSON.stringify(entries [0] [1])
    // let newEntry = JSON.stringify(entries [0] [1])
    // console.log(newEntry)

   
    // console.log(this.employeeData[1])
    // console.log(this.caller)
    // console.log(this.completedData)
    this.completedData = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <!-- <link href="./assets/css/style.css" rel="stylesheet" /> -->
    
    </head>
    <body>
        <header class='container-fluid bg-danger text-center text-white'>
    
            <h1>My Team</h1>
    
        </header>
    
        <div>
            <h2>${managerHtml}</h2>
        </div>
    </body>
    </html>`

   this.createHtml(this.completedData)
    // this.generateData()
    // .then(answer => {
    //   console.log(answer)
    // }
      
  // )
    // this.completeDocument()
  }

  // completeDocument() {
  //   createHtml()
  // }
  // writeFunction() {
  //   return generateData()
  //   .then(answer => {
  //     console.log(answer)
  //   })
  //   // .then(answer => {
  //   //   console.log(answer)
  //   // })
  //   // console.log(this.EmployeeData)
  // }
  createHtml(completedData) {
    return new Promise((resolve, reject) => {
        // uses data from generate markdown page as filecontent
    fs.writeFile('./dist/team.html', completedData, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
    })})})
}; 

}
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
// }

// // prompt for employee name
//   employeeNameQuestion() {
//     console.log(this.employeeInfo)

//     // uses employee to call getemployeeid function
//     this.employeeInfo.getEmployeeName()
//     // this.managerId = new Employee().getEmployeeId();
//     .then(({ employeeId }) => {
//         console.log(employeeId)
//         // creates a manager

//         // pushes name to manager array
//         this.employeeData.push(employeeId)
//         console.log(this.employeeData)

//         // directs to get email function
//         this.employeeIdQuestion()

//     })

//   }

//   // get employees id
//   employeeIdQuestion() {
//     console.log(this.employeeInfo)

//     // uses employee to call getemployeeid function
//     this.employeeInfo.getEmployeeId()
//     // this.managerId = new Employee().getEmployeeId();
//     .then(({ employeeId }) => {
//         console.log(employeeId)
//         // creates a manager

//         // pushes name to manager array
//         this.employeeData.push(employeeId)
//         console.log(this.employeeData)

//         // directs to get email function
//         this.employeeEmailFunction()

//     })
//   }

//   employeeEmailFunction() {
//     // gets email of employee
//       this.employeeInfo.getEmployeeEmail()

//       .then(({ employeeEmail }) => {

//         this.employeeData.push(employeeEmail)
//       console.log(this.employeeData)

//       console.log(this.roleAssign)

//       // call for individual items based on role.
//       if(this.roleAssign === 'Manager') {

//         this.managerQuestion();

//       } else if (this.roleAssign === 'Engineer') {

//       } else if (this.roleAssign === 'Intern') {

//       }

//       })
//   }

//   managerQuestion() {

//     this.employeeInfo.getOfficeNumber()

//     .then(({ officeNumber }) => {
//       console.log(officeNumber)
//       // creates a manager

//       // pushes officenumber to manager array
//       this.employeeData.push(officeNumber)
//       console.log(this.employeeData)

//   })
//   }
// }

// function structureApp() {
//     this.managerData = [];
// const writeFunction = () => {
//   createHtml('you')
//   // .then(answer => {
//   //   return console.log(answer)
//   // })

// }
// }
// sets manager Info to equal employeeName
new Aplication().startAppManager();

// .then(savedData => {
//     console.log(savedData)

// })

// }

// structureApp();
