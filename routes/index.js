var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/database-interface', function(req, res) {
  res.render('database-interface');
});

router.get('/diagram', function(req, res) {
  res.render('diagram');
});

router.get('/download/csv', function(req, res) {
  res.render('download/csv');
});

router.get('/download/raw-data', function(req, res) {
  res.render('download/raw-data');
});

module.exports = router;
