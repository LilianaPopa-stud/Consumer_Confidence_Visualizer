const { Sequelize } = require('sequelize');
/**
 * Initializing Sequelize ORM
 * */
const db = new Sequelize("consumer_confidence",null,null,{
    dialect : "sqlite",
    storage: "consumer_confidence.db"
});

module.exports = db;