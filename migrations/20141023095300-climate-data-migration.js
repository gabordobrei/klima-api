module.exports = {
  up: function (migration, Sequelize, done) {
    migration
      .createTable('ClimateData',
        {
          id: {
            type:          Sequelize.INTEGER,
            primaryKey:    true,
            autoIncrement: true
          },
 
          measuredAt: {
            type: Sequelize.DATE
          },
 
          city: {
            type:      Sequelize.STRING,
            allowNull: false
          },

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


          /*
          müszerszintilégnyomás
          hömérséklet
          szinoptikusszélsebesség
          szinoptikusszélirány
          összfelhözet
          relatívnedvesség
          csapadékösszeg
          jellemzöcsapadékalakkód
          
          ?? csapadékösvonatkozásiideje

          műszerszintilégnyomásÓRÁNKÉNTIVÁLTOZÁS,
          hőmérsékletÓRÁNKÉNTIVÁLTOZÁS,
          szinoptikusszélsebességÓRÁNKÉNTIVÁLTOZÁS,
          szinoptikusszélirányÓRÁNKÉNTIVÁLTOZÁS,
          relatívnedvességÓRÁNKÉNTIVÁLTOZÁS
          */
        }
      )
      .complete(done);
  },
 
  down: function (migration, Sequelize, done) {
    migration
      .dropTable('ClimateData')
      .complete(done);
  }
}