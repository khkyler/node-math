var utils = require('./utils'),
  is = require('is_js');

function calculate (equation, callback) {
  'use strict';

  var terms,
    result;

  if (is.empty(equation) || is.not.string(equation)) {
    return callback(new Error('Equation must be supplied and must be a string'));
  }

  if (equation.indexOf('+') > -1) {
    terms = equation.split('+');

    terms[0] = utils.parseNumbers(terms[0]);
    terms[1] = utils.parseNumbers(terms[1]);
    if (terms.indexOf('invalid') > -1) {
      return callback(new Error('Unable to process calculation, please request again using two integers'));
    }
    result = terms[0] + terms[1];
  }
  if (equation.indexOf('-') > -1) {
    terms = equation.split('-');

    terms[0] = utils.parseNumbers(terms[0]);
    terms[1] = utils.parseNumbers(terms[1]);
    if (terms.indexOf('invalid') > -1) {
      return callback(new Error('Unable to process calculation, please request again using two integers'));
    }
    result = terms[0] - terms[1];
  }
  if (equation.indexOf('*') > -1) {
    terms = equation.split('*');

    terms[0] = utils.parseNumbers(terms[0]);
    terms[1] = utils.parseNumbers(terms[1]);
    if (terms.indexOf('invalid') > -1) {
      return callback(new Error('Unable to process calculation, please request again using two integers'));
    }
    result = terms[0] * terms[1];
  }
  if (equation.indexOf('/') > -1) {
    terms = equation.split('/');

    terms[0] = utils.parseNumbers(terms[0]);
    terms[1] = utils.parseNumbers(terms[1]);
    if (terms.indexOf('invalid') > -1 || terms[1] === 0) {
      return callback(new Error('Unable to process calculation, please request again using two integers and the second term cannot be zero'));
    }
    result = terms[0] / terms[1];
  }

  return callback && callback(null, result);

}

var publicAPI = {
  calculate: calculate
};

module.exports = publicAPI;
