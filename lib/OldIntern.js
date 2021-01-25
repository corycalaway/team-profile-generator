

// // intern class poperties and methods, this extends Employee
class internInfo {
    constructor(internSchool) {
  
        
        this.internSchool = internSchool;
        console.log(internSchool)
        //school, getSchool(), gerRole()- overridden to return intern
    }

    questionsIntern() {

        // console.log(employeeData)
        
        // if (!employeeData) {
        //     employeeData = [];
        //   }
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'employeeSchool',
                    message: 'Enter team Intern school.'
                },
            ]) .then(activateChoices => {
                new internInfo(activateChoices)
                        //  return new choices().choicesPrompt()
                     })
            // .then(internReturn => {
            //     internInfo(internReturn)
            //     return choicesPrompt(employeeData)
            // })
        
}}

module.exports = internInfo;

// module.exports = (internInfo) => {
//     const {employeeName, employeeId, employeeEmail, employeeSchool} = internInfo

//     console.log(internInfo)
// }