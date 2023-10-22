const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
function caesarCipher(string, offset) {
  return alphabet[alphabet.indexOf(string) + offset];
}

module.exports = caesarCipher;
