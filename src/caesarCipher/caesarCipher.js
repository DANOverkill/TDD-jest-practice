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

        newArr.push(alphabetUppercase[newUppercaseLetterIndex]);
      } else {
        newArr.push(alphabetUppercase[uppercaseLetterIndex + shiftFactor]);
      }
    } else {
      let letterIndex = alphabet.indexOf(letter);
      if (letterIndex + shiftFactor > 25) {
        let newLetterIndex = letterIndex + shiftFactor - 26;
        newArr.push(alphabet[newLetterIndex]);
      } else {
        newArr.push(alphabet[letterIndex + shiftFactor]);
      }
    }
  };

  stringArr.forEach((element) => {
    emcryptEachLetter(element);
  });
  return newArr.join("");
}

export default caesarCipher;
