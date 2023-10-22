const analyzeArray = require("../scripts/analyzeArray");

test("Works for an array with the same numbers", () => {
  expect(analyzeArray([1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 2,
  });
});
