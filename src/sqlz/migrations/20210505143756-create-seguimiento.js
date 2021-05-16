'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('seguimientos', {
    id: {
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    descripcion: {
      allowNull: false,
      type: Sequelize.STRING(255)
    },
    ubicacion: {
      allowNull: false,
      type: Sequelize.STRING(30)
    },
    fecha: {
      type: Sequelize.DATE
    },
    tipo: {
      allowNull: false,
      type: Sequelize.ENUM('avistado', 'encontrado')
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    //relationship fields
    registroId: {
      type: Sequelize.UUID,
      allowNull: false,
      onDelete: 'RESTRICT',
      references: {
        model: 'registros',
        key: 'id',
        as: 'registroId',
      }
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('seguimientos')
};
