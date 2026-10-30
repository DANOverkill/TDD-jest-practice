import capitalize from "./capitalize.js";

test("capitalizes the first leter of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes the first leter of a string", () => {
  expect(capitalize("world")).toBe("World");
});
