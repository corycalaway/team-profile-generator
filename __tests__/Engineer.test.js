const Engineer = require('../lib/Engineer')

test('creates and Engineer object', () => {
    
    const engineer = new Engineer('Cory', 1234, '1234@gmail','githubname');

    expect(engineer.engineerName).toBe('Cory');
    expect(engineer.engineerId).toEqual(expect.any(Number));
    expect(engineer.engineerEmail).toEqual(expect.stringContaining('@'));
    expect(engineer.engineerGitHub).toEqual(expect.stringContaining('githubname'));
});

