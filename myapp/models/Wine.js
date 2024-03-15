'use strict';
const {
  Model
} = require('sequelize');
const Parcelle = require('./Parcelle');
module.exports = (sequelize, DataTypes) => {
  class Wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Parcelle, { foreignKey: 'parcelleId', as: 'parcelle' });
    }
  }
  Wine.init({
    name: DataTypes.STRING,
    vintage: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Wine',
  });
  return Wine;
};