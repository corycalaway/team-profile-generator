const Manager = require('../lib/Manager')

test('creates and employee object', () => {
    const manager = new Manager('Cory', 22, 'cory@gmail.com', 12);

    expect(manager.employeeName).toBe('Cory');
    expect(manager.employeeId).toEqual(expect.any(Number));
    expect(manager.employeeEmail).toEqual(expect.stringContaining('@'))
    expect(manager.officeNumber).toBeGreaterThanOrEqual(1);
});