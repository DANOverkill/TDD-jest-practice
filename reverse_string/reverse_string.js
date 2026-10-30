function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("parameter must be a string");
  } else {
    return string.split("").reverse().join("");
  }
}

export default reverseString;
