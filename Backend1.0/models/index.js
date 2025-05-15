const Sequelize = require('sequelize');
const sequelize = require('../config/db.config.js');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Componente = require('./componente.model')(sequelize, Sequelize.DataTypes);

module.exports = db;
