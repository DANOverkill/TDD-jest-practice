import analyzeArray from "./analyzeArray.js";

test('pass array- returns obj with correct keys', () => {
  const data = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(data)).toEqual({
    average: 4,
    length: 6
  });
});

test('pass array- returns obj with correct keys', () => {
  const data = [1, 2, 2, 4, 6];
  expect(analyzeArray(data)).toEqual({
    average: 3,
    length: 5,
  });
});