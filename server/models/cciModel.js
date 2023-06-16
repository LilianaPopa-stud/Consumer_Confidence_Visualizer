/**
 * CCI Model -> using Sequelizer, it is mapped to the 'CCI_INDEX' table in db
 * */
const sqlite = require('sqlite3')
const Sequelize = require('sequelize')
const db = require('../connectionDatabase.config')
const {STRING} = require("sequelize");
const cciSchema = {
    id: {
        type: STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    location: {
        type: STRING,
        allowNull: true
    },
    indicator: {
        type: STRING,
        allowNull: true
    },
    subject: {
        type: STRING,
        allowNull: true
    },
    measure: {
        type: STRING,
        allowNull: true
    },
    frequency: {
        type: STRING,
        allowNull: true
    },
    time: {
        type: STRING,
        allowNull: true
    },
    value: {
        type: STRING,
        allowNull: true
    },
    flag_codes: {
        type: STRING,
        allowNull: true
    }

}
const CCIModel = db.define('cci',cciSchema,{
    timestamps : false,
    createdAt: false,
    updatedAt: false
});
module.exports = () => CCIModel;