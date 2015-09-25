var connect = require('connect'),
  http = require('http'),
  bodyParser = require('body-parser'),
  calc = require('./lib/math');

var app = connect();

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
  //log the request
  console.log('INCOMING REQUEST [' + req.method + '] TO ' + req.url + ': ' + req.body.data);
  next();
});

//the meat of the function
app.use('/math', function (req, res, next) {
  if (req.method === 'POST') {
    var mathOper;
    try {
      mathOper = JSON.parse(req.body).data;
    } catch (e) {
      mathOper = req.body.data;
    }

    calc.calculate(mathOper, function (err, result) {
      if (err) {
        console.log('ERROR: ' + err);
        res.writeHead(400, {
          'Content-Type': 'text/plain'
        });
        return res.end(err.message);
      }
      res.end(JSON.stringify(result));
    });
  } else {
    next();
  }
});

//handle other routes
app.use(function (req, res, next) {
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  res.end('Page not found!!');
});

http.createServer(app).listen(3000, function () {
  console.log('Server started on port:', 3000);
});
