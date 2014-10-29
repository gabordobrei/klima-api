module.exports = {
  up: function (migration, Sequelize, done) {
    migration
      .createTable('AccidentData',
        {
          id: {
            type:          Sequelize.INTEGER,
            primaryKey:    true,
            autoIncrement: true
          },

          happenedAt: {
            type: Sequelize.DATE
          },

          outcome: {
            type:      Sequelize.ENUM,
            values:    ['minor', 'major', 'lethal'],
            allowNull: false
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
        }
      )
      .complete(done);
  },

  down: function (migration, Sequelize, done) {
    migration
      .dropTable('AccidentData')
      .complete(done);
  }
}