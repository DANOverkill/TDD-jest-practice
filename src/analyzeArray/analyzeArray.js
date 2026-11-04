// ==== helper functions =======
const checkArrLength = (arr) => {
  return arr.length;
};

const getAverage = (arr) => {
  let arrayLength = arr.length;
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  let average = sum / arrayLength;
  return average;
};

const getMin = (arr) => {
  let currentElement = arr[0];
  arr.forEach((element) => {
    if (currentElement > element) {
      currentElement = element;
    }
  });
  return currentElement;
};

const getMax = (arr) => {
  let currentElement = arr[0];
  arr.forEach((element) => {
    if (currentElement < element) {
      currentElement = element;
    }
  });
  return currentElement;
};

// ==== function to test =====//
function analyzeArray(arr) {
  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: checkArrLength(arr),
  };
}

export default analyzeArray;
