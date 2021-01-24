const fs = require("fs");
const questionsManager = require('./EmployeeLaunch')
const inquirer = require('inquirer');
const managerInfo = require('./Manager');
const Engineer = require("./Engineer");
const internInfo = require('./Intern')
const createHtml = require('./Launch')

// const {questionsManager, questionsEngineer} = require('../Index')
// Manager class porpertiesk and methods, extends employee class
class employeeInfo {
    constructor(employeeName, employeeId, employeeEmail, officeNumber, employeeGithub, employeeSchool) {

       
    this.officeNumber = officeNumber;
    this.employeeGithub = employeeGithub;
    this.employeeSchool = employeeSchool;
    this.employeeMain = [];
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
  
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
               
                
                // {
                //     type: 'list',
                //     name: 'employeeChoice',
                //     message: 'Would you like to add any employees to team.',
                //     choices: ['Engineer', 'Intern', 'Complete']
                // },
            ])   .then(employeeReturn => {
                const {employeeName, employeeId, employeeEmail} = employeeReturn
                console.log(employeeName, employeeId, employeeEmail)
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
            
            // .then(employeePass => {
            // if (!choicePick) {
            //  new this.managerPrompt(employeePass)
            // }}
            // .then(managerReturn => {
                          
            //     const {employeeName, employeeId, employeeEmail, officeNumber} = managerReturn
            //     new employeeInfo(employeeName, employeeId, employeeEmail)
            //     new managerInfo(officeNumber)
                
             
            // })
        //     .then(managerAnswers => {
        //         // checks to see what selections was 
        //     if (managerAnswers.employeeChoice === 'Engineer') {
        //         console.log('Engineer')
        //     } else if (managerAnswers.employeeChoice === 'Intern') {
        //         console.log('Intern')
        //     } else {
        //         console.log('Complete')
        //     }
        // });
        
        
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
    // getManagerInfo(){
    //     console.log(this.managerName, this.managerId, this.managerEmail, this.officeNumber)
    //     return 'pass'
    // }
}


const writeFunction = () => {
    return createHtml()
}
 module.exports = employeeInfo;

// module.exports = (managerInfo) => {
//     const {employeeName, employeeId, employeeEmail, employeeNumber} = managerInfo
// // create manager new manager
//     console.log(employeeName, employeeId, employeeEmail, employeeNumber)
// }