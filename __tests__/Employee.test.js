const Employee = require ('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('name', 'id', 'email');

  expect(employee.name).toEqual(expect.any(Object));
  expect(employee.id).toEqual(expect.any(Object));
  expect(employee.email).toEqual(expect.any(Object));
});