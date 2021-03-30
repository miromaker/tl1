var express = require('express');
var app = express();
var cors = require('cors');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.options('*', cors());


app.use(express.static(__dirname)); 


app.get('/index.html', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 5000);






// var express = require('express');
// var app = express();
// var cors = require('cors');


// app.use(cors());

// app.get('/index.html', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// });

// app.listen(3000, function () {
//   console.log('CORS-enabled web server listening on port 80')
// });