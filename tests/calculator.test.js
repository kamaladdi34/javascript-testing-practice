const calculator = require("../scripts/calculator");

test("Adds two numbers", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Substracts two numbers", () => {
  expect(calculator.substract(1, 1)).toBe(0);
});

test("Multiplies two numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Devides two numbers", () => {
  expect(calculator.devide(2, 2)).toBe(1);
});

test("Works with adding numbers strings", () => {
  expect(calculator.add("2", "2")).toBe(4);
});
