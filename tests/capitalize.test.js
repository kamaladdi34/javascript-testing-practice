const capitalize = require("../scripts/capitalize.js");

test("Capitalizes a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Works with empty strings", () => {
  expect(capitalize("")).toBe("");
});
