var path = require('path');
 
module.exports = function (sequelize, Sequelize) {
 
  var AccidentData = sequelize.define('AccidentData', {
    
    happenedAt: Sequelize.DATE,
    outcome: {
      type:   Sequelize.ENUM,
      values: ['minor', 'major', 'lethal']
    },
    latitude:  Sequelize.FLOAT(14, 12),
    longitude: Sequelize.FLOAT(14, 12)
  }, {
    timestamps: false
  });
 
  return AccidentData;
};