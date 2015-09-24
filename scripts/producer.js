var request = require('request');

;(function () {

    setInterval(function () {
      var num1 = Math.floor(Math.random() * 9),
        num2 = Math.floor(Math.random() * 9),
        equation = num1 + '+' + num2;
        console.log('Sending equation: ' + equation);
      request.post({url: 'http://localhost:3000/math', form: {data: equation}}, function(err, res, body) {
        var message = 'Result of calculation: ' + body;
        if (err) {
          message = 'Something went wrong: ' + err;
        }
        console.log(message);
      });
    }, 5);
})();
