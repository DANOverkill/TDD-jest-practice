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
      if (uppercaseLetterIndex + shiftFactor >= 0) {
        let newUppercaseLetterIndex = (uppercaseLetterIndex + shiftFactor) % 26;
        console.log(
          `${letter} with index ${uppercaseLetterIndex} gets changed to ${alphabetUppercase[newUppercaseLetterIndex]} with index of ${newUppercaseLetterIndex}`,
        );
        newArr.push(alphabetUppercase[newUppercaseLetterIndex]);
      } else {
        let newUppercaseLetterIndex =
          26 + ((uppercaseLetterIndex + shiftFactor) % 26);
        console.log(
          `${letter} with index ${uppercaseLetterIndex} gets changed to ${alphabetUppercase[newUppercaseLetterIndex]} with index of ${newUppercaseLetterIndex}`,
        );
        newArr.push(alphabetUppercase[newUppercaseLetterIndex]);
      }
    } else {
      let letterIndex = alphabet.indexOf(letter);
      if (letterIndex + shiftFactor >= 0) {
        let newLetterIndex = (letterIndex + shiftFactor) % 26;
        console.log(
          `${letter} with index ${letterIndex} gets changed to ${alphabet[newLetterIndex]} with index of ${newLetterIndex}`,
        );
        newArr.push(alphabet[newLetterIndex]);
      } else {
        let newLetterIndex = 26 + ((letterIndex + shiftFactor) % 26);
        console.log(
          `${letter} with index ${letterIndex} gets changed to ${alphabet[newLetterIndex]} with index of ${newLetterIndex}`,
        );
        newArr.push(alphabet[newLetterIndex]);
      }
    }
  };

  stringArr.forEach((element) => {
    encryptEachLetter(element);
  });
  return newArr.join("");
}

export default caesarCipher;
