const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); 

// Définir le modèle d'utilisateur
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(255), // Utilisation de VARCHAR(255) pour le nom d'utilisateur
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255), // Utilisation de VARCHAR(255) pour le mot de passe
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Utilisation de CURRENT_TIMESTAMP pour la valeur par défaut
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Utilisation de CURRENT_TIMESTAMP pour la valeur par défaut
  }
});

module.exports = User;
