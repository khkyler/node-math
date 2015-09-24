
  function calculate (equation, callback) {
    var eqs,
      result;

    if (equation.indexOf('+') > -1) {
      eqs = equation.split('+').map(function (elem) {
        var num = elem.trim();
        try {
          num = parseInt(num, 10);

          if (isNaN(num)) {
            throw new Error('Invalid equation!')
          }
        } catch (e) {
          callback(e);
        }
        return num;
      });
      result = eqs.reduce(function (acc, elem) {
        return acc += elem;
      }, 0);

      return callback && callback(null, result);

    }
    if (equation.indexOf('-') > -1) {

    }
    if (equation.indexOf('*') > -1) {

    }
    if (equation.indexOf('/') > -1) {

    }

  }

  var publicAPI = {
    calculate: calculate
  };

module.exports = publicAPI;
