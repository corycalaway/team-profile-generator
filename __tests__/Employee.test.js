const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

test('creates and employee object', () => {
    const employee = new Employee('Cory', 1234, '1234@gmail');

    expect(employee.name).toBe('Cory');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'))
    //how to check if email in jest
 //   expect(employee.email).toEqual(expect.any(Number));
    
    
});

