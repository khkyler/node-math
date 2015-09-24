function parseNumbers(string) {
  //trim whitespace and remove equals if it exists
  var cleanString = string.trim(),
    num;
  if (cleanString.indexOf('=') > -1) {
    cleanString = cleanString.slice(0, cleanString.indexOf('='));
  }

  //attemp to parse the number
  try {
    num = parseInt(cleanString, 10);
  } catch (e) {
    return null;
  }

  return num;
}

var exports = module.exports = {
  parseNumbers: parseNumbers
};
