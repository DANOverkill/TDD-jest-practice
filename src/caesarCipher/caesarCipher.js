function caesarCipher(string, shiftFactor) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let alphabetUppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let newArr = [];
  let stringArr = string.split("");
  console.log(`this is the array from the original input: ${stringArr}`);

  const emcryptEachLetter = (letter) => {
    if (
      alphabet.includes(letter) === false &&
      alphabetUppercase.includes(letter) === false
    ) {
      newArr.push(letter);
    } else if (letter === letter.toUpperCase()) {
      let uppercaseLetterIndex = alphabetUppercase.indexOf(letter);
      if (uppercaseLetterIndex + shiftFactor > 25) {
        let newUppercaseLetterIndex = uppercaseLetterIndex + shiftFactor - 26;
        console.log(
          `letter ${letter} with index ${uppercaseLetterIndex} is being converted to ${alphabetUppercase[newUppercaseLetterIndex]} which has the index of ${newUppercaseLetterIndex}`,
        );

        newArr.push(alphabetUppercase[newUppercaseLetterIndex]);
      } else {
        console.log(
          `letter ${letter} with index ${uppercaseLetterIndex} is being converted to ${alphabetUppercase[uppercaseLetterIndex + shiftFactor]} which has the index of ${uppercaseLetterIndex + shiftFactor}`,
        );

        newArr.push(alphabetUppercase[uppercaseLetterIndex + shiftFactor]);
      }
    } else {
      let letterIndex = alphabet.indexOf(letter);
      if (letterIndex + shiftFactor > 25) {
        let newLetterIndex = letterIndex + shiftFactor - 26;
        console.log(
          `letter ${letter} with index ${letterIndex} is being converted to ${alphabet[newLetterIndex]} which has the index of ${newLetterIndex}`,
        );

        newArr.push(alphabet[newLetterIndex]);
      } else {
        console.log(
          `letter ${letter} with index ${letterIndex} is being converted to ${alphabet[letterIndex + shiftFactor]} which has the index of ${letterIndex + shiftFactor}`,
        );

        newArr.push(alphabet[letterIndex + shiftFactor]);
      }
    }
  };

  stringArr.forEach((element) => {
    emcryptEachLetter(element);
  });
  console.log(`this is the newArray log: ${newArr}`);
  return newArr.join("");
}

export default caesarCipher;
