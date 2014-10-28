var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  console.log("GET /api");
  res.redirect('api/documentation');
});

router.get('/documentation', function(req, res) {
  console.log("GET /api/documentation");
  res.render('api-documentation');
});

module.exports = router;
