const { isInterfaceDeclaration } = require('@babel/types');
const inquirer = require('inquirer')

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
const questionsEngineer = (engineerData) => {

console.log(engineerData)

if (!engineerData.info) {
    engineerData.info = [];
  }
    return inquirer.prompt([

        {
            type: 'input',
            name: 'employeeName',
            message: 'Enter team manager name.'
        },
    ]).then(engineerInfo => {
        engineerData.info.push(engineerInfo)
        return choicesPrompt(engineerData)
    });
}

const questionsIntern = (internData) => {

    console.log(internData)
    
    if (!internData.info) {
        internData.info = [];
      }
        return inquirer.prompt([
    
            {
                type: 'input',
                name: 'employeeName',
                message: 'Enter team manager name.'
            },
        ]).then(engineerInfo => {
            internData.info.push(engineerInfo)
            return choicesPrompt(internData)
        });
    }


// WHEN I select the engineer option
// THEN I am prompted to enter the engineers name, ID, email, and GitHub username, and I am taken back to the menu

// choices prompt
const choicesPrompt = (engineerData, internData) => {
    
    return inquirer.prompt([
    // checks to see what selections was 
    {
        type: 'list',
        name: 'employeeChoice',
        message: 'Would you like to add any employees to team.',
        choices: ['Engineer', 'Intern', 'Complete']
    },
    
    ]).then(choiceAnswer => {
        // checks to see what selections was 
    if (choiceAnswer.employeeChoice === 'Engineer') {
        
        questionsEngineer(engineerData);
        console.log(engineerData)
    } else if (choiceAnswer.employeeChoice === 'Intern') {
        
        questionsIntern(internData);
        console.log(internData)
    } else {
        console.log('Complete')
    }
});
}

// manager questions
const questionsManager = () => {
    
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



const init = () => {
questionsManager()
// .then(variableCreate)
.then(choicesPrompt)
// .then(variableCreate)
// .then(choicesPrompt(engineerData))


}

init()
// let name = new name('questionsManager.nam')
// WHEN I start the application
// THEN I am prompted to enter the team managers name, employee ID, email address, and office number
// WHEN I enter the team managers name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the intern option
// THEN I am prompted to enter the interns name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated