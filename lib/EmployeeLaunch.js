const { isInterfaceDeclaration } = require('@babel/types');
const inquirer = require('inquirer');
const employeeInfo = require('./Employee')
const internInfo = require('./Intern')
const engineerInfo = require('./Engineer')
const managerInfo = require('./Manager')
// const managerInfo = require('./lib/Manager');
// const fs = require("fs");
// intern questions
// const questionsIntern = (internData) => {

//     console.log(internData)
    
//     if (!internData.info) {
//         internData.info = [];
//       }
//         return inquirer.prompt([
    
//             {
//                 type: 'input',
//                 name: 'employeeName',
//                 message: 'Enter team manager name.'
//             },
//         ]).then(internInfo => {
//             internData.info.push(internInfo)
//             return choicesPrompt(internData)
//         });
// }

// engineer questions
// questionsManager.prototype.questionsEngineer = function() {

// // console.log(employeeData)

// // if (!employeeData) {
// //     employeeData = [];
// //   }
//     return inquirer.prompt([

//         {
//             type: 'input',
//             name: 'employeeName',
//             message: 'Enter team engineer name.'
//         },
//         {
//             type: 'input',
//             name: 'employeeId',
//             message: 'Enter team engineer Id.'
//         },
//         {
//             type: 'input',
//             name: 'employeeEmail',
//             message: 'Enter team engineer email.'
//         },
//         {
//             type: 'input',
//             name: 'employeeGithub',
//             message: 'Enter team engineer Github username.'
//         },
//     ]).then(engineerReturn => {
//         new engineerInfo(engineerReturn)
//      this.choicesPrompt()
//     })
//     // .then(internReturn => {
//     //     internInfo(internReturn)
//     //     return choicesPrompt(employeeData)
//     // })
// }

// questionsManager.prototype.questionsIntern = function() {

//     // console.log(employeeData)
    
//     // if (!employeeData) {
//     //     employeeData = [];
//     //   }
//         return inquirer.prompt([
    
//             {
//                 type: 'input',
//                 name: 'employeeName',
//                 message: 'Enter team intern name.'
//             },
//             {
//                 type: 'input',
//                 name: 'employeeId',
//                 message: 'Enter team intern Id.'
//             },
//             {
//                 type: 'input',
//                 name: 'employeeEmail',
//                 message: 'Enter team Intern email.'
//             },
//             {
//                 type: 'input',
//                 name: 'employeeSchool',
//                 message: 'Enter team Intern school.'
//             },
//         ]).then(internReturn => {
//             new internInfo(internReturn)
//          this.choicesPrompt()
//         })
//         // .then(internReturn => {
//         //     internInfo(internReturn)
//         //     return choicesPrompt(employeeData)
//         // })
//     }

// WHEN I select the intern option
// THEN I am prompted to enter the interns name, ID, email, and school, and I am taken back to the menu
// WHEN I select the engineer option
// THEN I am prompted to enter the engineers name, ID, email, and GitHub username, and I am taken back to the menu

// choices prompt

// questionsManager.prototype.choicesPrompt = function(employeeData) {
    
//     return inquirer.prompt([
//     // checks to see what selections was 
//     {
//         type: 'list',
//         name: 'employeeChoice',
//         message: 'Would you like to add any employees to team.',
//         choices: ['Engineer', 'Intern', 'Complete']
//     },
    
//     ])
//     .then(choiceAnswer => {
//         // checks to see what selections was 
//     if (choiceAnswer.employeeChoice === 'Engineer') {
        
//         this.questionsEngineer(employeeData);
//         console.log(employeeData)
//     } else if (choiceAnswer.employeeChoice === 'Intern') {
        
//         this.questionsIntern(employeeData);
//         console.log(employeeData)
//     } else {
//         console.log('Complete')
//     }
// });
// }

// // manager questions

// class questionsManager {
//     constructor(employeePass) {
//     this.employeeName;
//     this.employeeId;
//     this.employeeEmail;
//     this.officeNumber;
//     this.employeeGithub;
//     this.employeeSchool;
//     this.employeeMain = [];

//     }

//     startManager() {

//         questionsManagerData()
        
      
        
        
//     // 
//      }

    //  questionsManagerData (choicePick){
    // console.log(choicePick)
    
    //      if (!choicePick || choicePick === 'Engineer' || choicePick === 'Intern') {


    //     return inquirer.prompt([
    
    //         {
    //             type: 'input',
    //             name: 'employeeName',
    //             message: 'Enter Employee name.'
    //         },
    //         {
    //             type: 'input',
    //             name: 'employeeId',
    //             message: 'Enter employee Id.'
    //         },
    //         {
    //             type: 'input',
    //             name: 'employeeEmail',
    //             message: 'Enter employee email.'
    //         },
           
            
    //         // {
    //         //     type: 'list',
    //         //     name: 'employeeChoice',
    //         //     message: 'Would you like to add any employees to team.',
    //         //     choices: ['Engineer', 'Intern', 'Complete']
    //         // },
    //     ])   .then(employeeReturn => {
                      
    //              const {employeeName, employeeId, employeeEmail} = employeeReturn
    //             this.employeeMain.push(new employeeInfo(employeeName, employeeId, employeeEmail));
    //     })
    //     .then(employeePass => {
    //         if (!choicePick) {
    //          this.managerPrompt(employeePass)
    //         } else if (choicePick === 'Engineer'){
    //             this.questionsEngineer(employeePass)
    //         } else if (choicePick === 'Intern'){
    //             this.questionsIntern(employeePass)
    //     }})
    //     }
        
    //     // .then(employeePass => {
    //     // if (!choicePick) {
    //     //  new this.managerPrompt(employeePass)
    //     // }}
    //     // .then(managerReturn => {
                      
    //     //     const {employeeName, employeeId, employeeEmail, officeNumber} = managerReturn
    //     //     new employeeInfo(employeeName, employeeId, employeeEmail)
    //     //     new managerInfo(officeNumber)
            
         
    //     // })
    // //     .then(managerAnswers => {
    // //         // checks to see what selections was 
    // //     if (managerAnswers.employeeChoice === 'Engineer') {
    // //         console.log('Engineer')
    // //     } else if (managerAnswers.employeeChoice === 'Intern') {
    // //         console.log('Intern')
    // //     } else {
    // //         console.log('Complete')
    // //     }
    // // });
    
    
    // }

//    questionsEngineer() {

//         // console.log(employeeData)
        
//         // if (!employeeData) {
//         //     employeeData = [];
//         //   }
//             return inquirer.prompt([
    
//                 {
//                     type: 'input',
//                     name: 'employeeGithub',
//                     message: 'Enter team engineer Github username.'
//                 },
//             ]).then(engineerReturn => {
                      

//                 this.employeeMain.push(new engineerInfo(engineerReturn))
              
//              this.choicesPrompt()
//             })
//             // .then(internReturn => {
//             //     internInfo(internReturn)
//             //     return choicesPrompt(employeeData)
//             // })
//         }

// questionsEngineer() {

//             // console.log(employeeData)
            
//             // if (!employeeData) {
//             //     employeeData = [];
//             //   }
//                 return inquirer.prompt([
            
//                     {
//                         type: 'input',
//                         name: 'employeeName',
//                         message: 'Enter team engineer name.'
//                     },
//                     {
//                         type: 'input',
//                         name: 'employeeId',
//                         message: 'Enter team engineer Id.'
//                     },
//                     {
//                         type: 'input',
//                         name: 'employeeEmail',
//                         message: 'Enter team engineer email.'
// //                     },
// //                     {
// //                         type: 'input',
// //                         name: 'employeeGithub',
// //                         message: 'Enter team engineer Github username.'
// //                     },
// //                 ]).then(engineerReturn => {
// //                     new engineerInfo(engineerReturn)
// //                  this.choicesPrompt()
// //                 })
// //                 // .then(internReturn => {
// //                 //     internInfo(internReturn)
// //                 //     return choicesPrompt(employeeData)
// //                 // })
// //             }
// questionsIntern() {

//                 // console.log(employeeData)
                
//                 // if (!employeeData) {
//                 //     employeeData = [];
//                 //   }
//                     return inquirer.prompt([
//                         {
//                             type: 'input',
//                             name: 'employeeSchool',
//                             message: 'Enter team Intern school.'
//                         },
//                     ]).then(internReturn => {
                      
            
                        
//                         this.employeeMain.push(new internInfo(internReturn))
//                         this.choicesPrompt()
//                          console.log(this.employeeMain)
//                     })
//                     // .then(internReturn => {
//                     //     internInfo(internReturn)
//                     //     return choicesPrompt(employeeData)
//                     // })
//                 }
               

// choicesPrompt() {
    
//     return inquirer.prompt([
//     // checks to see what selections was 
//     {
//         type: 'list',
//         name: 'employeeChoice',
//         message: 'Would you like to add any employees to team.',
//         choices: ['Engineer', 'Intern', 'Complete']
//     },
    
//      ]).then(choiceAnswer => {
//         this.questionsManagerData(choiceAnswer.employeeChoice)
//      })
// //     .then(choiceAnswer => {
// //         // checks to see what selections was 
// //     if (choiceAnswer.employeeChoice === 'Engineer') {
// //         this.questionsManagerData(choiceAnswer.employeeChoice)
// //         .then(sendData => {
// //             this.questionsEngineer(sendData)
// //         })
// //         // this.questionsEngineer(employeeData);
// //         console.log(employeeData)
// //     } else if (choiceAnswer.employeeChoice === 'Intern') {
// //         this.questionsManagerData(choiceAnswer.employeeChoice)
// //         .then(sendData => {
// //             this.questionsEngineer(sendData)
// //         })
// //         // this.questionsIntern(employeeData);
// //         // console.log(employeeData)
// //     } else {
// //         console.log('Complete')
// //     }
// // });
// }


// managerPrompt() {
//     return inquirer.prompt([
//         {
//         type: 'input',
//         name: 'officeNumber',
//         message: 'Enter employee office number.'
//     }
//     ])
//     .then(activateChoices => {
//        new managerInfo(activateChoices)
//                 return this.choicesPrompt()
//             })}}
    
    
//     .then(activateChoices => {
        
//         this.employeeMain.push(new managerInfo())
//         console.log(this.employeeMain)
//         this.choicesPrompt(activateChoices)
//     })
// }
// }

// questionsManager.prototype.startManager = function () {

//    questionsManagerData()
//    .then( managerComplete => {
//        return new managerInfo(managerComplete)
//    })
//    .then( choices => {
//       this.choicesPrompt(choices)
//    })
 
   
   

// }



// const questionsManagerData = () => {
    
//     return inquirer.prompt([

//         {
//             type: 'input',
//             name: 'employeeName',
//             message: 'Enter team manager name.'
//         },
//         {
//             type: 'input',
//             name: 'employeeId',
//             message: 'Enter employee Id.'
//         },
//         {
//             type: 'input',
//             name: 'employeeEmail',
//             message: 'Enter employee email.'
//         },
        
        
//         // {
//         //     type: 'list',
//         //     name: 'employeeChoice',
//         //     message: 'Would you like to add any employees to team.',
//         //     choices: ['Engineer', 'Intern', 'Complete']
//         // },
//     ])
// //     .then(managerAnswers => {
// //         // checks to see what selections was 
// //     if (managerAnswers.employeeChoice === 'Engineer') {
// //         console.log('Engineer')
// //     } else if (managerAnswers.employeeChoice === 'Intern') {
// //         console.log('Intern')
// //     } else {
// //         console.log('Complete')
// //     }
// // });



// }



// const init = () => {
// questionsManager()
// // .then(managerQA => {
// //     return managerInfo(managerQA)
// // })

// // .then(variableCreate)
// .then(choicesPrompt)
// // .then(internData => {
// //     console.log(questionsManager)
// // })
// // .then(engineerData => {
// //     console.log(engineerData)
// // })

// // .then(variableCreate)
// // .then(choicesPrompt(engineerData))


// }

// init()
// let name = new name('questionsManager.nam')
// WHEN I start the application
// THEN I am prompted to enter the team managers name, employee ID, email address, and office number
// WHEN I enter the team managers name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the intern option
// THEN I am prompted to enter the interns name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// module.exports = questionsManager