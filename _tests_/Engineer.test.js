const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Rob", 2, "Rob@test.com", "RobLow");

  expect(engineer.name).toBe("Rob");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("Rob@test.com");
  expect(engineer.getName()).toEqual(
    expect.stringContaining(engineer.name.toString())
  );
  expect(engineer.getId()).toEqual(expect.any(Number));
  expect(engineer.getEmail()).toEqual(
    expect.stringContaining(engineer.email.toString())
  );
  expect(engineer.github).toBe("RobLow");
  expect(engineer.getGitHub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
  expect(engineer.getRole()).toEqual("Engineer");
});
