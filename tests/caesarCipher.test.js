const caesarCipher = require("../scripts/caesarCipher");

test("Works with a single letter", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});
