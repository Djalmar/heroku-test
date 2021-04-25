'use strict';

const uuid = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const idCanino = uuid.v1();
    return queryInterface.bulkInsert('tipoMascotas', [{
      id: idCanino,
      nombre: 'Canino',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: uuid.v1(),
      nombre: 'Felino',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
      .then(tipos => queryInterface.bulkInsert('razas', [{
        id: uuid.v1(),
        nombre: 'Pug',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuid.v1(),
        nombre: 'Husky',
        tipoMascotaId: idCanino,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
      );

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
