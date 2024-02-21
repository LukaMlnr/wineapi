const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Wine = sequelize.define('Wine', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vintage: {
    type: DataTypes.INTEGER
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.FLOAT
  }
});

module.exports = Wine;
