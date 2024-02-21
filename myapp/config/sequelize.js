const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'admin',
  password: 'admin123',
  database: 'winemanager'
});

module.exports = sequelize;
