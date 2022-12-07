const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('tom', 90, 'tom@gmail.com', 'UVU');

  expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school name', () => {
  const intern = new Intern('tom', 90, 'tom@gmail.com', 'UVU');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
  const intern = new Intern('tom', 90, 'tom@gmail.com', 'UVU');

  expect(intern.getRole()).toEqual('Intern');
});