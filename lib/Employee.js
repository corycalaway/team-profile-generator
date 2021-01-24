const { isInterfaceDeclaration } = require('@babel/types');
const inquirer = require('inquirer');
const managerInfo = require('./Manager')
const internInfo = require('./Intern')
const engineerInfo = require('./Engineer')
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

// manager questions

class questionsManager {
    constructor(employeeName = '') {
    this.employeeName;
    this.employeeId;
    this.employeeEmail;
    this.employeeNumber;
    this.employeeGithub;
    this.employeeSchool;


    }

    startManager() {

        return questionsManagerData()
        
      
        
        
     
     }

     questionsManagerData (){
    
        return inquirer.prompt([
    
            {
                type: 'input',
                name: 'employeeName',
                message: 'Enter team manager name.'
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
            {
                type: 'input',
                name: 'employeeNumber',
                message: 'Enter employee office number.'
            },
            
            // {
            //     type: 'list',
            //     name: 'employeeChoice',
            //     message: 'Would you like to add any employees to team.',
            //     choices: ['Engineer', 'Intern', 'Complete']
            // },
        ])
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

   questionsEngineer() {

        // console.log(employeeData)
        
        // if (!employeeData) {
        //     employeeData = [];
        //   }
            return inquirer.prompt([
        
                {
                    type: 'input',
                    name: 'employeeName',
                    message: 'Enter team engineer name.'
                },
                {
                    type: 'input',
                    name: 'employeeId',
                    message: 'Enter team engineer Id.'
                },
                {
                    type: 'input',
                    name: 'employeeEmail',
                    message: 'Enter team engineer email.'
                },
                {
                    type: 'input',
                    name: 'employeeGithub',
                    message: 'Enter team engineer Github username.'
                },
            ]).then(engineerReturn => {
                new engineerInfo(engineerReturn)
             this.choicesPrompt()
            })
            // .then(internReturn => {
            //     internInfo(internReturn)
            //     return choicesPrompt(employeeData)
            // })
        }

questionsEngineer() {

            // console.log(employeeData)
            
            // if (!employeeData) {
            //     employeeData = [];
            //   }
                return inquirer.prompt([
            
                    {
                        type: 'input',
                        name: 'employeeName',
                        message: 'Enter team engineer name.'
                    },
                    {
                        type: 'input',
                        name: 'employeeId',
                        message: 'Enter team engineer Id.'
                    },
                    {
                        type: 'input',
                        name: 'employeeEmail',
                        message: 'Enter team engineer email.'
                    },
                    {
                        type: 'input',
                        name: 'employeeGithub',
                        message: 'Enter team engineer Github username.'
                    },
                ]).then(engineerReturn => {
                    new engineerInfo(engineerReturn)
                 this.choicesPrompt()
                })
                // .then(internReturn => {
                //     internInfo(internReturn)
                //     return choicesPrompt(employeeData)
                // })
            }
questionsIntern() {

                // console.log(employeeData)
                
                // if (!employeeData) {
                //     employeeData = [];
                //   }
                    return inquirer.prompt([
                
                        {
                            type: 'input',
                            name: 'employeeName',
                            message: 'Enter team intern name.'
                        },
                        {
                            type: 'input',
                            name: 'employeeId',
                            message: 'Enter team intern Id.'
                        },
                        {
                            type: 'input',
                            name: 'employeeEmail',
                            message: 'Enter team Intern email.'
                        },
                        {
                            type: 'input',
                            name: 'employeeSchool',
                            message: 'Enter team Intern school.'
                        },
                    ]).then(internReturn => {
                        new internInfo(internReturn)
                     this.choicesPrompt()
                    })
                    // .then(internReturn => {
                    //     internInfo(internReturn)
                    //     return choicesPrompt(employeeData)
                    // })
                }
               

choicesPrompt(employeeData) {
    
    return inquirer.prompt([
    // checks to see what selections was 
    {
        type: 'list',
        name: 'employeeChoice',
        message: 'Would you like to add any employees to team.',
        choices: ['Engineer', 'Intern', 'Complete']
    },
    
    ])
    .then(choiceAnswer => {
        // checks to see what selections was 
    if (choiceAnswer.employeeChoice === 'Engineer') {
        
        this.questionsEngineer(employeeData);
        console.log(employeeData)
    } else if (choiceAnswer.employeeChoice === 'Intern') {
        
        this.questionsIntern(employeeData);
        console.log(employeeData)
    } else {
        console.log('Complete')
    }
});
}

}

// questionsManager.prototype.startManager = function () {

//    questionsManagerData()
//    .then( managerComplete => {
//        return new managerInfo(managerComplete)
//    })
//    .then( choices => {
//       this.choicesPrompt(choices)
//    })
 
   
   

// }



const questionsManagerData = () => {
    
    return inquirer.prompt([

        {
            type: 'input',
            name: 'employeeName',
            message: 'Enter team manager name.'
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
        {
            type: 'input',
            name: 'employeeNumber',
            message: 'Enter employee office number.'
        },
        
        // {
        //     type: 'list',
        //     name: 'employeeChoice',
        //     message: 'Would you like to add any employees to team.',
        //     choices: ['Engineer', 'Intern', 'Complete']
        // },
    ])
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

module.exports = questionsManager