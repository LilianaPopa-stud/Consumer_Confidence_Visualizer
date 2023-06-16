/**
 * Admin Service -> interacts directly with the database via Sequelize methods
 * */
const AdminModel = require("../models/adminModel");
const Sequelizer = require('sequelize');
const db = require('../connectionDatabase.config');
const Admin = AdminModel(db, Sequelizer);

module.exports = class AdminService {

    /**
     * Check existence of given user in order to login
     * */

    static async findAdminWhere(username, password) {
        try {
            return await Admin.findAll({
                where: {
                    username : username,
                    password : password
                }
            });
        } catch (error) {
            console.log(`Could not find admin ${error}`);
        }
    }
}


