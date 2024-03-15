'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Wines', 'parcelleId', {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Parcelles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Wines', 'parcelleId');
  }
};
