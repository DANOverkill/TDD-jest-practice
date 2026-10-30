import calculator from "./calculator";

test("operation results", () => {
  expect(calculator(2, 2)).toEqual([4, 0, 4, 1]);
});
