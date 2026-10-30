import reverseString from "./reverse_string.js";

test("reverses string parameter passed", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses string parameter passed", () => {
  expect(reverseString("h")).toBe("h");
});

test("expect a string value to be passed", () => {
  expect(() => reverseString(1)).toThrow("parameter must be a string");
});
