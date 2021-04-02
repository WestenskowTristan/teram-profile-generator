const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Howie", 2, "Howie@test.com", 220);

  expect(manager.name).toBe("Howie");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("Howie@test.com");
  expect(manager.getName()).toEqual(
    expect.stringContaining(manager.name.toString())
  );
  expect(manager.getId()).toEqual(expect.any(Number));
  expect(manager.getEmail()).toEqual(
    expect.stringContaining(manager.email.toString())
  );
  expect(manager.officeNum).toEqual(expect.any(Number));
  expect(manager.getRole()).toEqual("Manager");
});
