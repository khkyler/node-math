var is = require('is_js');

function parseNumbers(string) {
  if (is.empty(string) || is.not.string(string)) {
    return 'invalid';
  }
  //trim whitespace and remove equals if it exists
  var cleanString = string.trim(),
    num;
  if (cleanString.indexOf('=') > -1) {
    //remove the equals sign
    cleanString = cleanString.slice(0, cleanString.indexOf('='));
    //trim in case of spaces
    cleanString = cleanString.trim();
  }

  //attemp to parse the number
  try {
    num = parseInt(cleanString, 10);
    //if its not a number return 'invalid'
    if (isNaN(num)) {
      num = 'invalid';
    }
  } catch (e) {
    return 'invalid';
  }

  return num;
}

var exports = module.exports = {
  parseNumbers: parseNumbers
};
