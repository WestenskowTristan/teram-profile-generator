const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Jason", 2, "Jason@test.com");

  expect(employee.name).toBe("Jason");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("Jason@test.com");
  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.name.toString())
  );
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
  expect(employee.getRole()).toEqual("Employee");
});
