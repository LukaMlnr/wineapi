'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parcelles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      superficie: {
        type: Sequelize.FLOAT
      },
      localisation: {
        type: Sequelize.STRING
      },
      exposition: {
        type: Sequelize.STRING
      },
      typeSol: {
        type: Sequelize.STRING
      },
      anneePlantation: {
        type: Sequelize.INTEGER
      },
      cepages: {
        type: Sequelize.TEXT
      },
      notes: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Parcelles');
  }
};