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

function caesarCipher(string, shiftFactor) {
  let newArr = [];
  let stringArr = string.split("");

  const encryptEachLetter = (letter) => {
    if (
      alphabet.includes(letter) === false &&
      alphabetUppercase.includes(letter) === false
    ) {
      newArr.push(letter);
    } else if (letter === letter.toUpperCase()) {
      let uppercaseLetterIndex = alphabetUppercase.indexOf(letter);
      let newUppercaseLetterIndex =
        (((uppercaseLetterIndex + shiftFactor) % 26) + 26) % 26;
      newArr.push(alphabetUppercase[newUppercaseLetterIndex]);
    } else {
      let letterIndex = alphabet.indexOf(letter);
      let newLetterIndex = (((letterIndex + shiftFactor) % 26) + 26) % 26;
      newArr.push(alphabet[newLetterIndex]);
    }
  };

  stringArr.forEach((element) => {
    encryptEachLetter(element);
  });
  return newArr.join("");
}

export default caesarCipher;
