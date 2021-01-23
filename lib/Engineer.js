
// engineer class poperties and methods, this extends Employee
class Engineer {
    constructor (engineerName, engineerId, engineerEmail, engineerGitHub) {

        this.engineerName = engineerName;
        this.engineerId = engineerId;
        this.engineerEmail = engineerEmail;
        this.engineerGitHub = engineerGitHub;
        // github, getGithub(), getRole() - Overrideen to return 'Engineer'
    }
}

module.exports = Engineer;