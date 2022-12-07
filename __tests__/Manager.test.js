const Manager = require('../lib/Manager');

test('creates an manager object', () => {
  const manager = new Manager('tom', 90, 'tom@gmail.com', 17);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
  const manager = new Manager('tom', 90, 'tom@gmail.com');

  expect(manager.getRole()).toEqual('Manager');
});