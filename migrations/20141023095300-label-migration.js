module.exports = {
  up: function (migration, Sequelize, done) {
    migration
      .createTable('Label',
        {
          id: {
            type:          Sequelize.INTEGER,
            primaryKey:    true,
            autoIncrement: true
          },
 
          code: Sequelize.INTEGER,
          text: Sequelize.STRING,
          type: Sequelize.STRING
          
          /*
          pl.:
          <id>, 5, "összfelhözet", "Az ég 5/8-át felhő fedi."
          */
        }
      )
      .complete(done);
  },
 
  down: function (migration, Sequelize, done) {
    migration
      .dropTable('Label')
      .complete(done);
  }
}