var express = require('express');
var router = express.Router();
var models = require('../models');

var options = {
  limit: 100,
  offset: 0,
  fields: "id",
  startdate: new Date(1990, 1-1, 1, 0, 0),
  enddate: new Date(2010, 12-1, 31, 23, 59),
  outcome: 1,
  latitude_min: 45.7616715318,
  latitude_max: 48.5629226611,
  longitude_min: 16.1614025739,
  longitude_max: 22.8732794381
};

function getter(options) {
  return options;
}

function getter2(options) {
  var limit         = options.limit;
  var offset        = options.offset;
  var attributes    = options.fields;
  var startdate     = options.startdate;
  var enddate       = options.enddate;
  var outcome       = options.spec.outcome;
  var latitude_min  = options.spec.latitude_min;
  var latitude_max  = options.spec.latitude_max;
  var longitude_min = options.spec.longitude_min;
  var longitude_max = options.spec.longitude_max;

  models.AccidentData
    .findAll({
      where: {
        latitude: {between: [latitude_min, latitude_max]},
        longitude: {between: [longitude_min, longitude_max]},
        outcome: outcome
      },
      attributes: attributes,
      offset: offset,
      limit: limit
    })
    .success(function(result) {
      console.log(result);
      return result;
    });
}

/*
"GET heszi.tmit.bme.hu:3000/api/climate/temperature?from=1990-01-01&to=1990-01-02"        
"accidents/minor..." == "accidents?outcome=minor..."
"accidents/major..."
"accidents/lethal..."
"accidents?outcome=minor&outcome=minor..."
"...&at=1990-01-12" == "...&from=1990-01-12&to=1990-01-12"
//*/

router.get('/', function(req, res) {
  //var startdate = new Date(req.query.startdate);
  console.log("GET /api/accidents");
});

router.post('/', function(req, res) {
  console.log("POST /api/accidents");
  res.send(req.body);
});

router.get('/:outcome_text', function(req, res) {
  var outcome_text = req.params.outcome_text;

  var oc = {"minor": 1, "major": 2, "lethal": 3};

  options.outcome = oc[outcome_text];

  // TODO FIXME
  // req.query.startdate

  console.log("/api/accidents/:outcome_text");

  res.json(getter(options));
});

module.exports = router;
