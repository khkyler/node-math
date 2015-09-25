var should = require('should'),
  utils = require('../../../lib/utils');

describe('Tests the parseNumbers function in lib/utils.js', function () {
  var string = '',
    parsedNumber;

  beforeEach(function (done) {
    string = '';
    parsedNumber = null;

    done();
  });

  it('If the string is an empty string it should call the callback with an error', function (done) {
    parsedNumber = utils.parseNumbers(string);

    parsedNumber.should.equal('invalid');
    done();
  });

  it('If the string is an array it should call the callback with an error', function (done) {
    string  = [1,2,3];
    parsedNumber = utils.parseNumbers(string);

    parsedNumber.should.equal('invalid');
    done();
  });

  it('If the string is an object it should call the callback with an error', function (done) {
    string  = {test: 'case'};
    parsedNumber = utils.parseNumbers(string);

    parsedNumber.should.equal('invalid');
    done();
  });

  it('If the string is a letter it should call the callback with an error', function (done) {
    string  = 'a';
    parsedNumber = utils.parseNumbers(string);

    parsedNumber.should.equal('invalid');
    done();
  });

  it('If the string conatains invalid chars it should call the callback with an error', function (done) {
    string  = 'a]';
    parsedNumber = utils.parseNumbers(string);

    parsedNumber.should.equal('invalid');
    done();
  });

  it('If the string conatains valid number it should return the number', function (done) {
    string  = '3';
    parsedNumber = utils.parseNumbers(string);

    parsedNumber.should.equal(3);
    done();
  });

  it('If the string conatains valid number and an equals sign it should return the number without the equals', function (done) {
    string  = '85=';
    parsedNumber = utils.parseNumbers(string);

    parsedNumber.should.equal(85);
    done();
  });

});
