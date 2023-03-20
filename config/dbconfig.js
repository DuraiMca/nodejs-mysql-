const config = require("../config/config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = sequelize;