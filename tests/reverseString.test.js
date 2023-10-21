const reverseString = require("../scripts/reverseString");

test("Reverses a string", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
