const Manager = require('../lib/Manager')

test('creates and employee object', () => {
    const manager = new Manager('Cory', 1234, '1234@gmail', 12);

    expect(manager.managerName).toBe('Cory');
    expect(manager.managerId).toEqual(expect.any(Number));
    expect(manager.managerEmail).toEqual(expect.stringContaining('@'))
    expect(manager.officeNumber).toBeGreaterThanOrEqual(1);
});