const questionsManager = require('./lib/Employee');
// const inquirer = require('inquirer');
const managerInfo = require('./lib/Manager')
// const internInfo = require('./Intern')
// const engineerInfo = require('./Engineer')


new questionsManager().startManager()
.then( managerComplete => {
    return new managerInfo(managerComplete)
})
.then( choices => {
   new questionsManager().choicesPrompt(choices)
})