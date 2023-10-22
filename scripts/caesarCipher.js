const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
function caesarCipher(string, offset) {
  let isUpperCase = string === string.toUpperCase();
  let letter = string.toLowerCase();
  let targetIndex = (alphabet.indexOf(letter) + offset) % alphabet.length;
  let newLetter = alphabet[targetIndex];
  return isUpperCase ? newLetter.toUpperCase() : newLetter;
}

module.exports = caesarCipher;
