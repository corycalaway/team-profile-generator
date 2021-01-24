const questionsManager = require('./lib/EmployeeLaunch');
// const inquirer = require('inquirer');
const managerInfo = require('./lib/Manager')
// const internInfo = require('./Intern')
// const engineerInfo = require('./Engineer')
const employeeInfo = require('./lib/Employee')
const managerInfoData = require('./lib/Manager')

new questionsManager().questionsManagerData()
// .then( managerComplete => {
//     return new managerInfo(managerComplete)


    // .then(employeeReturn => {
                      
    //     const {employeeName, employeeId, employeeEmail} = employeeReturn
    //     new employeeInfo(employeeName, employeeId, employeeEmail)
    //     // new managerInfo(officeNumber)
        
     
    // })
    // .then(managerReturn => {
    //     return new questionsManager().managerPrompt(managerReturn)
    // }).then(managerSave => {
    //     new managerInfoData(managerSave)
    // })
// })
// .then( choices => {
//    new questionsManager().choicesPrompt(choices)
// })