const capitalize = require("../scripts/capitalize.js");

test("Capitalizes a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});
