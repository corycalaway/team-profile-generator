const { test, expect } = require('@jest/globals')
const questionsManager = require('../lib/Employee')

test('creates and employee object', () => {
    const employee = new questionsManager('Cory');

    expect(employee.employeeName).toBe('Cory');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'))

    // this.employeeName;
    // this.employeeId;
    // this.employeeEmail;
    // this.employeeNumber;
    // this.employeeGithub;
    // this.employeeSchool;
});

