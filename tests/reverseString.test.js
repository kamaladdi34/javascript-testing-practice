const reverseString = require("../scripts/reverseString");

test("Reverses a string", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("Works with numbers", () => {
  expect(reverseString(12345)).toBe("54321");
});
