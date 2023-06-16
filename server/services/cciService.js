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
        try{
            return await CCI.findAll();
        }
        catch (error) {
            console.error("getAll error: ", error);
            throw new Error("Error querying database");
        }
    }
    static async findByYearRange(startYear, endYear) {
        try {
            return await CCI.findAll({
                where: {
                    time: {
                        [Op.between]: [`${startYear}-01`, `${endYear}-12`],
                    },
                },
            });
        } catch (error) {
            console.error("findByYearRange error: ", error);
            throw new Error("Error querying database");
        }
    }
    static async findByYear(year) {
        try {
            return await CCI.findAll({
                where: {
                    time: {
                        [Op.like]: `${year}%`,
                    },
                },
            });
        } catch (error) {
            console.error("findByYear error: ", error);
            throw new Error("Error querying database");
        }
    }
    static async findByCountry(country) {
        try {
            return await CCI.findAll({
                where: {
                    location: {
                        [Op.like]: `${country}%`,
                    },
                },
            });
        } catch (error) {
           console.error("findByCountry error: ", error);
            throw new Error("Error querying database");
        }

    }
    static async findByCountryAndYear(country, year) {
        try {
            return await CCI.findAll({
                where: {
                    location: {
                        [Op.like]: `${country}%`,
                    },
                    time: {
                        [Op.like]: `${year}%`,
                    },
                },
            });
        } catch (error) {
            console.error("FindByCountryAndYear error: ", error);
            throw new Error("Error querying database");
        }
    }
    static async findByCountryAndYearRange(country, startYear, endYear) {
        try {
            return await CCI.findAll({
                where: {
                    location: {
                        [Op.like]: `${country}%`,
                    },
                    time: {
                        [Op.between]: [`${startYear}-01`, `${endYear}-12`],
                    },
                },
            });
        } catch (error) {
           console.error("findByCountryAndYearRange error: ", error);
            throw new Error("Error querying database");
        }
    }
    static async findByCountryYearAndMonth(country, year, month) {
        try {
            return await CCI.findAll({
                where: {
                    location: {
                        [Op.like]: `${country}%`,
                    },
                    time: {
                        [Op.like]: `${year}-${month}`,
                    },
                },
            });
        } catch (error) {
            console.error("findByCountryYearAndMonth error: ", error);
            throw new Error("Error querying database");
        }
    }
    static async findByCountryYearMonthRange(country, startYear, endYear, startMonth, endMonth) {
        try {
            return await CCI.findAll({
                where: {
                    location: {
                        [Op.like]: `${country}%`,
                    },
                    time: {
                        [Op.between]: [`${startYear}-${startMonth}`, `${endYear}-${endMonth}`],
                    },
                },
            });
        } catch (error) {
            console.error("findByCountryYearMonthRange error: ", error);
            throw new Error("Error querying database");
        }
    }

}