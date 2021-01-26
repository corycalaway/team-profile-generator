
const fs = require("fs");



// creates Readme file
const createHtml = fileContent => {
    return new Promise((resolve, reject) => {
        // uses data from generate markdown page as filecontent
    fs.writeFile('./dist/team.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
    })})})
}; 

const generateData = (employeeData) => {
  console.log(employeeData)
  //  return console.log(employeeData)
  // const {Manager, Engineer, Intern} = employeeData;
  // console.log(Manager, Engineer, Intern)
  //  return Object.keys(employeeData).map(k => employeeData[k]))
}

module.exports = {createHtml, generateData}