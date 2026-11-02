import caesarCipher from "./caesarCipher.js";

test("test if the word hello returns the proper emcrypted result khoor", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("test if case sensitive HeLLo returns correctly LiPPs", () => {
  expect(caesarCipher("HeLLo", 4)).toBe("LiPPs");
});

test("test edge case where letters are at the end of the alphabet", () => {
  expect(caesarCipher("xYz", 4)).toBe("bCd");
});

test("test edge case where letters are at the end of the alphabet", () => {
  expect(caesarCipher("xYz", 3)).toBe("aBc");
});

test("test new capitalized case", () => {
  expect(caesarCipher("TodaY", 2)).toBe("VqfcA");
});

test("test edge when more then a single word is used", () => {
  expect(caesarCipher("Hello World", 3)).toBe("Khoor Zruog");
});

test("test edge when more then a single word is used", () => {
  expect(caesarCipher("Hello, Hi World!", 3)).toBe("Khoor, Kl Zruog!");
});
