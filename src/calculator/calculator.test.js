import calculator from "./calculator.js";

// Add tests
test.each([
  [2, 2, 4],
  [1, 2, 3],
  [1, 0, 1],
  [0.5, -5, -4.5],
  [0, 2, 2],
])("adds two numbers", (a, b, expected) => {
  expect(calculator.add(a, b)).toBe(expected);
});

test.each([
  ["2", 2, "numbers must be not be a string"],
  [1, "2", "numbers must be not be a string"],
  ["0.5", "-5", "numbers must be not be a string"],
])("rejects string inputs", (a, b, expected) => {
  expect(() => calculator.add(a, b)).toThrow(expected);
});

//Subtract tests
test.each([
  [2, 2, 0],
  [1, 2, -1],
  [1, 0, 1],
  [0.5, -5, 5.5],
  [0, 2, -2],
])("subtracts two numbers", (a, b, expected) => {
  expect(calculator.subtract(a, b)).toBe(expected);
});

test.each([
  ["2", 2, "numbers must be not be a string"],
  [1, "2", "numbers must be not be a string"],
  ["0.5", "-5", "numbers must be not be a string"],
])("rejects string inputs", (a, b, expected) => {
  expect(() => calculator.subtract(a, b)).toThrow(expected);
});

//multiply tests
test.each([
  [2, 2, 4],
  [1, 2, 2],
  [1, 0, 0],
  [0.5, -5, -2.5],
  [0, 2, 0],
])("multiplies two numbers", (a, b, expected) => {
  expect(calculator.multiply(a, b)).toBe(expected);
});

test.each([
  ["2", 2, "numbers must be not be a string"],
  [1, "2", "numbers must be not be a string"],
  ["0.5", "-5", "numbers must be not be a string"],
])("rejects string inputs", (a, b, expected) => {
  expect(() => calculator.multiply(a, b)).toThrow(expected);
});

//divide tests
test.each([
  [2, 2, 1],
  [1, 2, 0.5],
  [1, 0, Infinity],
  [0.5, -5, -0.1],
  [0, 2, 0],
])("divides two numbers", (a, b, expected) => {
  expect(calculator.divide(a, b)).toBe(expected);
});

test.each([
  ["2", 2, "numbers must be not be a string"],
  [1, "2", "numbers must be not be a string"],
  ["0.5", "-5", "numbers must be not be a string"],
])("rejects string inputs", (a, b, expected) => {
  expect(() => calculator.divide(a, b)).toThrow(expected);
});
