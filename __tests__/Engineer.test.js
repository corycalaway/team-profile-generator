const Engineer = require('../lib/Engineer')

test('creates and Engineer object', () => {
    
    const engineer = new Engineer('Cory', 1234, '1234@gmail','githubname');

    expect(engineer.employeeName).toBe('Cory');
    expect(engineer.employeeId).toEqual(expect.any(Number));
    expect(engineer.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(engineer.employeeGitHub).toEqual(expect.stringContaining('githubname'));
});

