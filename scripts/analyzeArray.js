function analyzeArray(array) {
  array = toNumbers(array);
  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
}

function getAverage(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

function getMin(array) {
  let min = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function getMax(array) {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function toNumbers(array) {
  return array.map((element) => +element);
}
module.exports = analyzeArray;
