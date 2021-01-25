const { test, expect } = require('@jest/globals')

const Employee = require('../lib/Employee.js')

test('creates and employee object', () => {
    const employee = new Employee('Cory', 1234, '1234@gmail');

    expect(employee.employeeName).toBe('Cory');
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.employeeEmail).toEqual(expect.stringContaining('@'))


    // this.employeeName;
    // this.employeeId;
    // this.employeeEmail;
    // this.employeeNumber;
    // this.employeeGithub;
    // this.employeeSchool;
});

