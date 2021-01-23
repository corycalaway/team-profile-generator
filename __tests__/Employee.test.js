const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

test('creates and employee object', () => {
    const employee = new Employee('Cory', 1234, '1234@gmail');

    expect(employee.employeeName).toBe('Cory');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'))
});

