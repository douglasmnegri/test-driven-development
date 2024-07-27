const alphabetLowercase = [
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

function caesarCipher(str, n) {
  let cipherIndex = [];
  let cipherStr = "";
  let lowerCaseString = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (alphabetLowercase.indexOf(lowerCaseString[i]) < 0) {
      cipherIndex.push(str[i]);
    } else {
      cipherIndex.push(alphabetLowercase.indexOf(lowerCaseString[i]));
      cipherIndex[i] += n;
    }
  }

  cipherIndex = cipherIndex.map((n) => {
    if (n > 25) {
      return n - 26;
    }
    return n;
  });

  for (let j = 0; j < cipherIndex.length; j++) {
    if (typeof alphabetLowercase[cipherIndex[j]] == "undefined") {
      cipherStr += cipherIndex[j];
    } else if (str[j].toUpperCase() == str[j]) {
      cipherStr += alphabetLowercase[cipherIndex[j]].toUpperCase();
    } else {
      cipherStr += alphabetLowercase[cipherIndex[j]];
    }
  }
  return cipherStr;
}

module.exports = {
    caesarCipher
}
