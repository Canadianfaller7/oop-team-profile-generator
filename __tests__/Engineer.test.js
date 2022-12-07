const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('tom', 90, 'tom@gmail.com', 'tom90');

  expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github name', () => {
  const engineer = new Engineer('tom', 90, 'tom@gmail.com', 'tom90');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
  const engineer = new Engineer('tom', 90, 'tom@gmail.com', 'tom90');

  expect(engineer.getRole()).toEqual('Engineer');
});

