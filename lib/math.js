var utils = require('./utils');

function calculate (equation, callback) {
  'use strict';

  var terms,
    result;

  if (equation.indexOf('+') > -1) {
    terms = equation.split('+');

    terms[0] = utils.parseNumbers(terms[0]);
    terms[1] = utils.parseNumbers(terms[1]);
    if (terms.indexOf(null) > -1) {
      return callback(new Error('Unable to process calculation, please request again using two integers'));
    }
    result = terms[0] + terms[1];
  }
  if (equation.indexOf('-') > -1) {
    terms = equation.split('-');

    terms[0] = utils.parseNumbers(terms[0]);
    terms[1] = utils.parseNumbers(terms[1]);
    if (terms.indexOf(null) > -1) {
      return callback(new Error('Unable to process calculation, please request again using two integers'));
    }
    result = terms[0] - terms[1];
  }
  if (equation.indexOf('*') > -1) {
    terms = equation.split('*');

    terms[0] = utils.parseNumbers(terms[0]);
    terms[1] = utils.parseNumbers(terms[1]);
    if (terms.indexOf(null) > -1) {
      return callback(new Error('Unable to process calculation, please request again using two integers'));
    }
    result = terms[0] * terms[1];
  }
  if (equation.indexOf('/') > -1) {
    terms = equation.split('/');

    terms[0] = utils.parseNumbers(terms[0]);
    terms[1] = utils.parseNumbers(terms[1]);
    console.log(terms);
    if (terms.indexOf(null) > -1 || terms[1] === 0) {
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
