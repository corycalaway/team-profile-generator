const fs = require("fs");
const questionsManager = require('./EmployeeLaunch')
const inquirer = require('inquirer');
const managerInfo = require('./Manager');
const Engineer = require("./Engineer");
const internInfo = require('./Intern')
const { createHtml, generateData } = require('./Launch')
const employeeInfoMain = [];
// const {questionsManager, questionsEngineer} = require('../Index')
// Manager class porpertiesk and methods, extends employee class
class employeeInfo {
    constructor() {

       
    // this.officeNumber = officeNumber;
    // this.employeeGithub = employeeGithub;
    // this.employeeSchool = employeeSchool;
    // this.employeeMain = [];
    //     this.employeeName = employeeName;
    //     this.employeeId = employeeId;
    //     this.employeeEmail = employeeEmail;
  
    // officeNumber, getRole() - Overridden to return 'Manager'
    }
  questionsManagerData (choicePick){
        console.log(choicePick)
        
             if (!choicePick || choicePick === 'Engineer' || choicePick === 'Intern') {
    
    
            return inquirer.prompt([
        
                {
                    type: 'input',
                    name: 'employeeName',
                    message: 'Enter Employee name.'
                },
                {
                    type: 'input',
                    name: 'employeeId',
                    message: 'Enter employee Id.'
                },
                {
                    type: 'input',
                    name: 'employeeEmail',
                    message: 'Enter employee email.'
                },
               
            ])   .then(employeeReturn => {
                const {employeeName, employeeId, employeeEmail} = employeeReturn
                console.log(employeeName, employeeId, employeeEmail)
                
               
                employeeInfoMain.push(employeeName, employeeId,employeeEmail)
                console.log(employeeInfoMain)
                this.employeeName = employeeName;
                this.employeeId = employeeId;
                this.employeeEmail = employeeEmail;
                    //  const {employeeName, employeeId, employeeEmail} = employeeReturn
                    // this.employeeMain.push(new employeeInfo(employeeName, employeeId, employeeEmail));
            })
            .then(employeePass => {
                if (!choicePick) {
                //  new questionsManager(employeePass)
                new managerInfo().managerPrompt()
                // console.log(new managerInfo().managerPrompt())
                   
                .then(choiceSelect => {
                    new employeeInfo().choicesPrompt(choiceSelect)

                })
                
                } else if (choicePick === 'Engineer'){
                    new Engineer().questionsEngineer()
                    .then(choiceSelect => {
                        new employeeInfo().choicesPrompt(choiceSelect)
                    })
                } else if (choicePick === 'Intern'){
                    new internInfo().questionsIntern()
                    .then(choiceSelect => {
                        console.log('pass')
                        new employeeInfo().choicesPrompt(choiceSelect)
                    })
            }})
            }
            
        
        
        }
        choicesPrompt() {
    
            return inquirer.prompt([
            // checks to see what selections was 
            {
                type: 'list',
                name: 'employeeChoice',
                message: 'Would you like to add any employees to team.',
                choices: ['Engineer', 'Intern', 'Complete']
            },
            
             ])
            //  .then(choiceAnswer => {
            //     this.questionsManagerData(choiceAnswer.employeeChoice)
            //  }) 
                 .then(choiceAnswer => {
                        // checks to see what selections was 
                    if (choiceAnswer.employeeChoice === 'Engineer') {
                        let engineerCreate = new employeeInfo()
                        engineerCreate.questionsManagerData(choiceAnswer.employeeChoice);
                        // .then(sendData => {
                        //     this.questionsEngineer(sendData)
                        // })
                        // this.questionsEngineer(employeeData);
                        // console.log(employeeData)
                    } else if (choiceAnswer.employeeChoice === 'Intern') {
                        let internCreateEmployee = new employeeInfo()
                        
                        internCreateEmployee.questionsManagerData(choiceAnswer.employeeChoice)
                        // .then(sendData => {
                        //     this.questionsEngineer(sendData)
                        // })
                        // this.questionsIntern(employeeData);
                        // console.log(employeeData)
                    } else {
                        console.log('Complete')
                        writeFunction()
                    }
                });
                
                
    }

}

const writeFunction = function(){
   
  console.log(generateData)
    return createHtml(generateData)
   
}


 module.exports = employeeInfo;

