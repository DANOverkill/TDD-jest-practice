import analyzeArray from "./analyzeArray.js";

test("pass array- returns obj with correct keys", () => {
  const data = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(data)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("pass array- returns obj with correct keys", () => {
  const data = [1, 2, 2, 4, 6];
  expect(analyzeArray(data)).toEqual({
    average: 3,
    min: 1,
    max: 6,
    length: 5,
  });
});

test("pass array- returns obj with correct keys", () => {
  const data = [-5, 2, -3, -8, -1];
  expect(analyzeArray(data)).toEqual({
    average: -3,
    min: -8,
    max: 2,
    length: 5,
  });
});

test("pass array- returns obj with correct keys", () => {
  const data = [-5, 2, 3];
  expect(analyzeArray(data)).toEqual({
    average: 0,
    min: -5,
    max: 3,
    length: 3,
  });
});

test("pass array- returns obj with correct keys", () => {
  const data = [];
  expect(analyzeArray(data)).toEqual({
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("pass array- returns obj with correct keys", () => {
  const data = [3];
  expect(analyzeArray(data)).toEqual({
    average: 3,
    min: 3,
    max: 3,
    length: 1,
  });
});
