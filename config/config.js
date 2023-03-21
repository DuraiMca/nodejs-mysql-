const env = require("dotenv").config();
module.exports = {
	PORT: process.env.PORT,
	HOST: process.env.HOST,
	USER: process.env.DBUSER,
    PASSWORD: process.env.DBPASSWORD,
    DB: process.env.DBNAME,
    JWT_SECRET: process.env.JWT_SECRET,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
