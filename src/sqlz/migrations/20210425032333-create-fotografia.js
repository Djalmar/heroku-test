'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('fotografia', {
    id: {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    path: {
      allowNull: false,
      type: Sequelize.STRING(250)
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('fotografia')
};
