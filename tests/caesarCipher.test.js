const caesarCipher = require("../scripts/caesarCipher");

test("Works with a single letter", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test("Wraps when index out of range", () => {
  expect(caesarCipher("z", 13)).toBe("m");
});
