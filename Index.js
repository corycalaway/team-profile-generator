const questionsManager = require('./lib/EmployeeLaunch');
// const inquirer = require('inquirer');
const managerInfo = require('./lib/Manager')
// const internInfo = require('./Intern')
// const engineerInfo = require('./Engineer')
const employeeInfo = require('./lib/Employee')


new questionsManager().startManager()
// .then( managerComplete => {
//     return new managerInfo(managerComplete)


    .then(managerReturn => {
                      
        const {employeeName, employeeId, employeeEmail, officeNumber} = managerReturn
        new employeeInfo(employeeName, employeeId, employeeEmail)
        new managerInfo(officeNumber)
        
     
    })
// })
.then( choices => {
   new questionsManager().choicesPrompt(choices)
})