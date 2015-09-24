var request = require('request');

;(function () {
  var operators = ['+', '-', '*', '/'];
  setInterval(function () {
    //assemble the random equation
    var num1 = Math.floor(Math.random() * 9),
      num2 = Math.floor(Math.random() * 9),
      oper = operators[Math.floor(Math.random() * 3)],
      equation = num1 + oper + num2;
      //some of the time add an equals to the end
      if (Math.floor(Math.random() * 9) % 3 === 0) {
        equation += '=';
      }
      console.log('Sending equation: ' + equation);
    request.post({url: 'http://localhost:3000/math', form: {data: equation}}, function(err, res, body) {
      var message = 'Result of calculation: ' + body;
      if (err) {
        message = 'Something went wrong: ' + err;
      }
      console.log(message);
    });
  }, 650);
})();
