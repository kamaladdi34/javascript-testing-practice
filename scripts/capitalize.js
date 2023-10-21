function capitalize(string) {
  string = string.toString();
  return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}
module.exports = capitalize;
