/**
 * Admin Model -> mapped to 'admins' table using Sequelizer
 * */

const sqlite3 = require('sqlite3');
const Sequelize = require('sequelize');
<<<<<<< Updated upstream:model/adminModel.js
const db = require('../config/connectionDatabase');
=======
const db = require('../connectionDatabase.config');
>>>>>>> Stashed changes:server/models/adminModel.js
const {INTEGER} = require("sequelize");

const adminSchema = {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    username: {
        type: String
    },
    password: {
        type: String,
    }
}

/**
 * OBS -> excluding auto-generated fields.
 * */

const AdminModel = db.define('admin',adminSchema,{
    timestamps : false,
    createdAt: false,
    updatedAt: false
});
module.exports = () => AdminModel;
