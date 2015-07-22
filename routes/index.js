var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', body: 'El portal donde podrá crear sus propios juegos!' });
});

module.exports = router;
