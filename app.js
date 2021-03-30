var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.options('*', cors());


app.use(express.static(__dirname)); 


app.get('/index.html', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000);




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