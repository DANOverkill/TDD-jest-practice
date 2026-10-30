const typeofCheck = (a, b) => {
  if (typeof a === "string" || typeof b === "string") {
    return true;
  }
  return false;
};

const calculator = {
  add(a, b) {
    if (typeofCheck(a, b) === true) {
      throw new Error("numbers must be not be a string");
    }
    return a + b;
  },
  subtract(a, b) {
    if (typeofCheck(a, b) === true) {
      throw new Error("numbers must be not be a string");
    }
    return a - b;
  },
  multiply(a, b) {
    if (typeofCheck(a, b) === true) {
      throw new Error("numbers must be not be a string");
    }
    return a * b;
  },
  divide(a, b) {
    if (typeofCheck(a, b) === true) {
      throw new Error("numbers must be not be a string");
    }
    return a / b;
  },
};

export default calculator;
