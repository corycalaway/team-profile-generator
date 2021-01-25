const Intern = require('../lib/Intern')

test('creates and Engineer object', () => {
    
    const intern = new Intern('Cory', 1234, '1234@gmail','schoolName');

    expect(intern.employeeName).toBe('Cory');
    expect(intern.employeeId).toEqual(expect.any(Number));
    expect(intern.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(intern.employeeSchool).toEqual(expect.stringContaining('schoolName'));
});