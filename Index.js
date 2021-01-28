const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const inquirer = require("inquirer");

class Aplication {
  constructor(answer) {
    this.employeeInfo = [];
    this.employeeData = [];
    this.caller = "";
    this.roleAssign = "Manager";
    this.completedData = "fail";
    this.managerFirst = 0;
  }

  employeeRoleQuestion() {
    this.employeeData.push(this.caller);
    this.employeeInfo = [];

    inquirer
      .prompt({
        type: "list",
        name: "employeeChoice",
        message: "Would you like to add any employees to team.",
        choices: ["Engineer", "Intern", "Complete"],
      })
      .then((answer) => {
        console.log(answer);

        if (answer.employeeChoice === "Engineer") {
          this.roleAssign = "Engineer";
          this.caller = new Engineer();

          return this.startApp();
        } else if (answer.employeeChoice === "Intern") {
          this.roleAssign = "Intern";
          this.caller = new Intern();
          return this.startApp();
        } else {
          this.writeFunction();
        }
      });
  }

  startAppManager() {
    this.caller = new Manager();
    return this.startApp();
  }

  startApp() {
    // calls manager class

    if (this.managerFirst === 0) {
      this.managerFirst++;
      console.log("Please enter Managers Information");
    }
    this.caller
      .getEmployeeName()

      .then((answer) => {
        this.employeeInfo.push(answer.employeeName);

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
              // asks for aditional team members
              return this.employeeRoleQuestion();
            });

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

                // asks for aditional team members
                return this.employeeRoleQuestion();
              })
          );
        } else {
          // return this.writeFunction()
          this.writeFunction();
        }
      });
  }

  writeFunction() {
    let managerObject = "";
    let engineerObject = "";
    let internObject = "";
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    let managerData = this.employeeData.filter((element) => {
      if (element.officeNumber) {
        index1++;
        managerObject = `<div class='objectsHtml'> <div class='holder'> <h2 class='infoDataClass'>${element.employeeName}</h2> <h3>Manager</h3> </div><div class='holderBottom'> <h3 class='infoDataClass'>ID: ${element.employeeId}</h3> <h3 class='infoDataClass'>Email: ${element.employeeEmail}</h3> <h3 class='infoDataClass'>Office Number: ${element.officeNumber}</h3> </div> </div>`;
        return true;
      }
    })[index1];

    let engineerData = this.employeeData.filter((element) => {
      if (element.employeeGitHub) {
        engineerObject =
          engineerObject +
          `<div class='objectsHtml'> <div class='holder'> <h2 class='infoDataClass'>${element.employeeName}</h2> <h3>Engineer</h3> </div><div class='holderBottom'> <h3 class='infoDataClass'>ID: ${element.employeeId}</h3>   <h3 class='infoDataClass'>Email: ${element.employeeEmail}</h3> <h3 class='infoDataClass'>GitHub: ${element.employeeGitHub}</h3> </div></div>`;
        return true;
      }
    })[index2];

    let internData = this.employeeData.filter((element) => {
      if (element.employeeSchool) {
        internObject =
          internObject +
          `<div class='objectsHtml'> <div class='holder'> <h2 class='infoDataClass'>${element.employeeName}</h2> <h3>Intern</h3> </div><div class='holderBottom'> <h3 class='infoDataClass'>ID: ${element.employeeId}</h3> <h3 class='infoDataClass'>Email: ${element.employeeEmail}</h3> <h3 class='infoDataClass'>School: ${element.employeeSchool}</h3> </div> </div>`;
        return true;
      }
    })[index3];

    // information to create html format
    this.completedData = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <link href="./style.css" rel="stylesheet" />
    
    </head>
    <body>
        <header class='container-fluid bg-danger text-center text-white'>
    
            <h1>My Team</h1>
    
        </header>
    
        <div class='container-fluid'>
            ${managerObject}
        </div>
        <div class='container-fluid'>
            ${engineerObject}
            </div>
            <div class='container-fluid'>
            ${internObject}
        </div>
    </body>
    </html>`;

    this.createHtml(this.completedData);
  }

  createHtml(completedData) {
    return new Promise((resolve, reject) => {
      // uses data from generate markdown page as filecontent
      fs.writeFile("./dist/team.html", completedData, (err) => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }

        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: "File created!",
        });
      });
    });
  }
}

new Aplication().startAppManager();