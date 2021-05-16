'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('registros', {
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
    fechaPerdida: {
      type: Sequelize.DATE
    },
    fechaHallazgo: {
      type: Sequelize.DATE
    },
    tipo: {
      allowNull: false,
      type: Sequelize.ENUM('perdida', 'encuentro')
    },
    estado: {
      allowNull: false,
      type: Sequelize.ENUM('encontrado', 'perdido')
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
    mascotaId: {
      type: Sequelize.UUID,
      allowNull: false,
      onDelete: 'RESTRICT',
      references: {
        model: 'mascotas',
        key: 'id',
        as: 'mascotaId',
      }
    },
    usuarioId: {
      type: Sequelize.UUID,
      allowNull: false,
      onDelete: 'RESTRICT',
      references: {
        model: 'usuarios',
        key: 'id',
        as: 'usuarioId',
      }
    }
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('registros')
};
