import calculator from "./calculator";

test("operation results", () => {
  expect(calculator(2, 2)).toBe(4, 0, 4, 1);
});
