'use strict';
const {
  Model
} = require('sequelize');
const Wine = require('./Wine');
module.exports = (sequelize, DataTypes) => {
  class Parcelle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(models.Wine, { foreignKey: 'parcelleId', as: 'wines' });
    }
  }
  Parcelle.init({
    nom: DataTypes.STRING,
    superficie: DataTypes.FLOAT,
    localisation: DataTypes.STRING,
    exposition: DataTypes.STRING,
    typeSol: DataTypes.STRING,
    anneePlantation: DataTypes.INTEGER,
    cepages: DataTypes.TEXT,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Parcelle',
  });
  return Parcelle;
};