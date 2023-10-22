const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function caesarCipher(string, offset) {
  let letters = string.split("");
  for (let i = 0; i < letters.length; i++) {
    letters[i] = getEncryptedLetter(letters[i], offset);
  }
  return letters.join("");
}

function getEncryptedLetter(letter, offset) {
  let lowerCaseLetter = letter.toLowerCase();
  if (!alphabet.includes(lowerCaseLetter)) {
    return letter;
  }
  let isUpperCase = letter === letter.toUpperCase();
  let targetIndex =
    (alphabet.indexOf(lowerCaseLetter) + offset) % alphabet.length;
  let newLetter = alphabet[targetIndex];
  return isUpperCase ? newLetter.toUpperCase() : newLetter;
}

module.exports = caesarCipher;
