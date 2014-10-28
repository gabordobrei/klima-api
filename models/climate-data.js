var path = require('path');
 
module.exports = function (sequelize, Sequelize) {
 
  var ClimateData = sequelize.define('ClimateData', {
    measuredAt:                   Sequelize.DATE,

    city:                         Sequelize.STRING,
    pressure:                     Sequelize.FLOAT,
    temperature:                  Sequelize.FLOAT,
    synopticWindSpeed:            Sequelize.INTEGER,
    synopticWindDirection:        Sequelize.INTEGER,
    cloudiness:                   Sequelize.INTEGER,
    relativeHumidity:             Sequelize.INTEGER,
    precipitation:                Sequelize.INTEGER,
    precipitationCharacteristics: Sequelize.INTEGER,
    
    deltaPressure:                Sequelize.FLOAT,
    deltaTemperature:             Sequelize.FLOAT,
    deltaSynopticWindSpeed:       Sequelize.INTEGER,
    deltaSynopticWindDirection:   Sequelize.INTEGER,
    deltaRelativeHumidity:        Sequelize.INTEGER
  }, {
    timestamps: false,

    classMethods: {
      getCities: function () {
        return ['Budapest', 'Debrecen', 'Győr', 'Nagykanizsa', 'Pécs', 'Siófok', 'Szeged', 'Szombathely'];
      }
    }
  });
 
  return ClimateData;
};