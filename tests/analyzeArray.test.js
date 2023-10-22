const analyzeArray = require("../scripts/analyzeArray");

test("Test", () => {
  expect(analyzeArray([1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 2,
  });
});
