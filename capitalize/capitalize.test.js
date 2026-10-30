import capitalize from "./capitalize.js";

test("capitalizes the first letter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes the first letter of a string", () => {
  expect(capitalize("world")).toBe("World");
});

test("capitalizes the first letter of a string", () => {
  expect(capitalize("hello world!")).toBe("Hello world!");
});

test("capitalizes the first letter of a string", () => {
  expect(capitalize("h")).toBe("H");
});

test("parameter must be a string", () => {
  expect(() => capitalize(1)).toThrow("parameter must be a string");
});
