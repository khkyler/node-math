var should = require('should'),
  sinon = require('sinon'),
  rewire = require('rewire'),
  utils = rewire('../../../lib/utils'),
  math =  require('../../../lib/math');

describe('Tests the calculate function in lib/math.js', function () {
  var equation,
    callback = sinon.spy(spy),
    cbResult = {};

  function spy(error, result) {
    cbResult.err = error;
    cbResult.res = result;
  }

  parseNumbersStub = sinon.stub();

  utils.__set__({
    'parseNumbers': parseNumbersStub
  });

  beforeEach(function (done) {
    equation = '';

    done();
  });

  afterEach(function (done) {
    callback.reset();

    done();
  });

  it('If the equation is an empty string it should call the callback with an error', function (done) {
    math.calculate('', callback);

    callback.calledOnce.should.equal(true);
    should.exist(cbResult.err);
    should.not.exist(cbResult.res);
    done();
  });

  it('If the equation is an object it should call the callback with an error', function (done) {
    math.calculate({test: 'case'}, callback);

    callback.calledOnce.should.equal(true);
    should.exist(cbResult.err);
    should.not.exist(cbResult.res);
    done();
  });

  it('If the equation is an array it should call the callback with an error', function (done) {
    math.calculate([1,2,3], callback);

    callback.calledOnce.should.equal(true);
    should.exist(cbResult.err);
    should.not.exist(cbResult.res);
    done();
  });

  it('If the equation is an number it should call the callback with an error', function (done) {
    math.calculate(23, callback);

    callback.calledOnce.should.equal(true);
    should.exist(cbResult.err);
    should.not.exist(cbResult.res);
    done();
  });

  it('If the equation contains addition but the terms are not numbers it should call the callback with an error', function (done) {
    equation = 'a.1+3=';
    parseNumbersStub.withArgs('a.1').returns(null);

    math.calculate(equation, callback);

    callback.calledOnce.should.equal(true);
    should.exist(cbResult.err);
    should.not.exist(cbResult.res);
    done();
  });

  it('If the equation contains addition and numbers 1+2 the result will be 3', function (done) {
    equation = '1+2=';
    parseNumbersStub.withArgs('1').returns(1);
    parseNumbersStub.withArgs('2').returns(2);

    math.calculate(equation, callback);

    callback.calledOnce.should.equal(true);
    should.not.exist(cbResult.err);
    should.exist(cbResult.res);
    cbResult.res.should.equal(3);
    done();
  });

  it('If the equation contains subtraction but the terms are not numbers it should call the callback with an error', function (done) {
    equation = 'a.1-3=';
    parseNumbersStub.withArgs('a.1').returns(null);

    math.calculate(equation, callback);

    callback.calledOnce.should.equal(true);
    should.exist(cbResult.err);
    should.not.exist(cbResult.res);
    done();
  });

  it('If the equation contains subtraction and numbers 2-1 the result will be 1', function (done) {
    equation = '2-1=';
    parseNumbersStub.withArgs('1').returns(1);
    parseNumbersStub.withArgs('2').returns(2);

    math.calculate(equation, callback);

    callback.calledOnce.should.equal(true);
    should.not.exist(cbResult.err);
    should.exist(cbResult.res);
    cbResult.res.should.equal(1);
    done();
  });

  it('If the equation contains multiplication but the terms are not numbers it should call the callback with an error', function (done) {
    equation = 'a.1*3=';
    parseNumbersStub.withArgs('a.1').returns(null);

    math.calculate(equation, callback);

    callback.calledOnce.should.equal(true);
    should.exist(cbResult.err);
    should.not.exist(cbResult.res);
    done();
  });

  it('If the equation contains multiplication and numbers 1*2 the result will be 2', function (done) {
    equation = '1*2=';
    parseNumbersStub.withArgs('1').returns(1);
    parseNumbersStub.withArgs('2').returns(2);

    math.calculate(equation, callback);

    callback.calledOnce.should.equal(true);
    should.not.exist(cbResult.err);
    should.exist(cbResult.res);
    cbResult.res.should.equal(2);
    done();
  });

  it('If the equation contains division but the terms are not numbers it should call the callback with an error', function (done) {
    equation = 'a.1/3=';
    parseNumbersStub.withArgs('a.1').returns(null);

    math.calculate(equation, callback);

    callback.calledOnce.should.equal(true);
    should.exist(cbResult.err);
    should.not.exist(cbResult.res);
    done();
  });

  it('If the equation contains division and numbers 1/2 the result will be .5', function (done) {
    equation = '1/2=';
    parseNumbersStub.withArgs('1').returns(1);
    parseNumbersStub.withArgs('2').returns(2);

    math.calculate(equation, callback);

    callback.calledOnce.should.equal(true);
    should.not.exist(cbResult.err);
    should.exist(cbResult.res);
    cbResult.res.should.equal(0.5);
    done();
  });

  it('If the equation contains division and numbers 1/0 callback will be called with an error', function (done) {
    equation = '1/0=';
    parseNumbersStub.withArgs('1').returns(1);
    parseNumbersStub.withArgs('0').returns(0);

    math.calculate(equation, callback);

    callback.calledOnce.should.equal(true);
    should.exist(cbResult.err);
    should.not.exist(cbResult.res);
    done();
  });
});
