const caesarCipher = require("../scripts/caesarCipher");

test("Works with a single letter", () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test("Wraps when index out of range", () => {
  expect(caesarCipher("z", 13)).toBe("m");
});

test("Works with uppercase letters", () => {
  expect(caesarCipher("Z", 13)).toBe("M");
});

test("Works with more than one letter", () => {
  expect(caesarCipher("aa", 1)).toBe("bb");
});
