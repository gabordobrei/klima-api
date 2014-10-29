var path = require('path');

module.exports = function (sequelize, Sequelize) {

  var AccidentData = sequelize.define('AccidentData', {

    happenedAt: Sequelize.DATE,

    outcome: {
      type:   Sequelize.ENUM,
      values: ['minor', 'major', 'lethal']
    },

    roadShape: {
      type: Sequelize.ENUM,
      values: ['straight', 'bend', 'bends', 'bump', 'crossroads' ]
    },

    latitude:  Sequelize.FLOAT(14, 12),
    longitude: Sequelize.FLOAT(14, 12),

    isBuiltupAreas:                 Sequelize.BOOLEAN,
    isDirectionFrontal:             Sequelize.BOOLEAN,
    isDirectionSameDirection:       Sequelize.BOOLEAN,
    isDirectionStraightAndStraight: Sequelize.BOOLEAN,
    isDirectionStraightAndCrossing: Sequelize.BOOLEAN,

    isPassangerInjured:  Sequelize.BOOLEAN,
    isPedestrianInjured: Sequelize.BOOLEAN,

    withTrain:      Sequelize.BOOLEAN,
    withWildAnimal: Sequelize.BOOLEAN,
    withPet:        Sequelize.BOOLEAN,
    isOtherCause:   Sequelize.BOOLEAN

  }, {
    timestamps: false
  });

  return AccidentData;
};