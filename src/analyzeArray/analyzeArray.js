// ==== helper functions =======
const checkArrLength = (arr) => {
  return arr.length;
};

const getAverage = (arr) => {
  let arrayLength = arr.length;
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let average = sum / arrayLength;
  return average;
};


// ==== function to test =====//
function analyzeArray(arr) {
  
  return {
    average: getAverage(arr),
    length: checkArrLength(arr)
  };
};



export default analyzeArray;
