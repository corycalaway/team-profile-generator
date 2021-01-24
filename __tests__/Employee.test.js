const { test, expect } = require('@jest/globals')
const questionsManager = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('creates and employee object', () => {
    const employee = new Manager('Cory', 1234, '1234@gmail', 12);

    expect(employee.managerName).toBe('Cory');
    expect(employee.managerId).toEqual(expect.any(Number));
    expect(employee.managerEmail).toEqual(expect.stringContaining('@'))
    expect(employee.officeNumber).toBeGreaterThanOrEqual(1);

    // this.employeeName;
    // this.employeeId;
    // this.employeeEmail;
    // this.employeeNumber;
    // this.employeeGithub;
    // this.employeeSchool;
});

