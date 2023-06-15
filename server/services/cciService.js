/**
 * CCI SERVICE -> interacts directly with the database, via the Sequelize operations (findAll, count, create, etc...)
 * */
const  CciModel = require("../models/cciModel");
const Sequelizer = require('sequelize');
const Op = Sequelizer.Op;
const db = require('../connectionDatabase.config');
const CCI = CciModel(db, Sequelizer);

module.exports = class cciService{
    static async getAll(){
        return await CCI.findAll();
    }
}