const Intern = require('../lib/Intern')

test('creates and Engineer object', () => {
    
    const intern = new Intern('Cory', 1234, '1234@gmail','schoolName');

    expect(intern.internName).toBe('Cory');
    expect(intern.internId).toEqual(expect.any(Number));
    expect(intern.internEmail).toEqual(expect.stringContaining('@'));
    expect(intern.internSchool).toEqual(expect.stringContaining('schoolName'));
});