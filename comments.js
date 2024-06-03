// Create web server
// Use express
var express = require('express');
var app = express();

// Use body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Use Datastore
var Datastore = require('nedb');
var db = new Datastore({ filename: 'comments.db', autoload: true });

// Use CORS
var cors = require('cors');
app.use(cors());

// Create a new comment
app.post('/comments', function (req, res) {
  var comment = {
    text: req.body.text,
    date: new Date()
  };
  db.insert(comment, function (err, newComment) {
    res.json(newComment);
  });
});

// Get all comments
app.get('/comments', function (req, res) {
  db.find({}, function (err, comments) {
    res.json(comments);
  });
});

// Start web server
app.listen(3000, function () {
  console.log('Server listening on port 3000');
});