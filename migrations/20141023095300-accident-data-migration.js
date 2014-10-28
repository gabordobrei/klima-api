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
          latitude:  Sequelize.FLOAT(14, 12),
          longitude: Sequelize.FLOAT(14, 12)
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