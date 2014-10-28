var express = require('express');
var router  = express.Router();
var models  = require('../models');
var Util    = require('../lib/apiUtil');

var options = {
  limit: 100,
  offset: 0,
  fields: "id",
  startdate: new Date(1990, 1-1, 1, 0, 0),
  enddate: new Date(2010, 12-1, 31, 23, 59),
  city: "Budapest",
  pressure: 10
};

function getter(options) {
  return options;
}

router.all('/', function(req, res) {
  console.log("ALL /climate");

  /*
    http:/ux.com/2013/03/28/2-steps-api-error-codes/
  */
  res.status(501).send({ error: 'This method is not implemented (yet)!'});
});

router.get('/cities', function(req, res) {
  console.log("GET /climate/cities");

  var cities = models.ClimateData.getCities();

  res.json({
    'now': new Date().toISOString(),
    'availableCities' : cities
  });
});


router.get('/:city', function(req, res) {
  var city = req.params.city;
  //options.city = city;

  models.ClimateData
    .findAll({
      where: {city: city},
      limit: 2
      })
    .success(function(climateData) {
      if(climateData === null || climateData === undefined || climateData.length == 0) {
        res.status(400).send({ error: 'There\'s no city named ' + city});
      } else {
        res.json(Util.removeNulls(climateData));
      }
    })

  // TODO FIXME
  console.log("/climate/:city");

  
});

module.exports = router;
