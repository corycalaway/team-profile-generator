const fs = require("fs");

const inquirer = require('inquirer');

// engineer class poperties and methods, this extends Employee
class Engineer {
    constructor (engineerGitHub) {

       
        this.engineerGitHub;
        console.log(engineerGitHub)
        
        // github, getGithub(), getRole() - Overrideen to return 'Engineer'
    }

    questionsEngineer() {

        // console.log(employeeData)
        
        // if (!employeeData) {
        //     employeeData = [];
        //   }
            return inquirer.prompt([
    
                {
                    type: 'input',
                    name: 'employeeGithub',
                    message: 'Enter team engineer Github username.'
                },
            ]).then(engineerReturn => {
                      

                new Engineer(engineerReturn)
              
                
            })
            // .then(internReturn => {
            //     internInfo(internReturn)
            //     return choicesPrompt(employeeData)
            // })
        }
}

module.exports = Engineer

