const calculator = require("../scripts/calculator");

test("Adds two numbers", () => {
  expect(calculator.add(1, 1)).toBe(2);
});
