// const fs = require("fs");
// const inquirer = require('inquirer');
// const engineer = require('./Engineer');
// const internInfo = require("./Intern");
// const employeeInfo = require('./Employee')
// // // intern class poperties and methods, this extends Employee
// class Choices {
//     constructor() {

        
//         // this.role = role;
//         // this.second = second;
//     }

//     choicesPrompt() {
    
//         return inquirer.prompt([
//         // checks to see what selections was 
//         {
//             type: 'list',
//             name: 'employeeChoice',
//             message: 'Would you like to add any employees to team.',
//             choices: ['Engineer', 'Intern', 'Complete']
//         },
        
//          ])
//         //  .then(choiceAnswer => {
//         //     this.questionsManagerData(choiceAnswer.employeeChoice)
//         //  }) 
//              .then(choiceAnswer => {
//                     // checks to see what selections was 
//                 if (choiceAnswer.employeeChoice === 'Engineer') {
//                     let engineerCreate = new employeeInfo()
//                     engineerCreate.questionsManagerData(choiceAnswer.employeeChoice);
//                     // .then(sendData => {
//                     //     this.questionsEngineer(sendData)
//                     // })
//                     // this.questionsEngineer(employeeData);
//                     // console.log(employeeData)
//                 } else if (choiceAnswer.employeeChoice === 'Intern') {
//                     new internInfo().questionsIntern(choiceAnswer.employeeChoice)
//                     // .then(sendData => {
//                     //     this.questionsEngineer(sendData)
//                     // })
//                     // this.questionsIntern(employeeData);
//                     // console.log(employeeData)
//                 } else {
//                     console.log('Complete')
//                 }
//             });
            
            
// }}

// module.exports = Choices;