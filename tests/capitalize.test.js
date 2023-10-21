const capitalize = require("../scripts/capitalize.js");

test("Returns the same string", () => {
  expect(capitalize("Hello")).toBe("Hello");
});
