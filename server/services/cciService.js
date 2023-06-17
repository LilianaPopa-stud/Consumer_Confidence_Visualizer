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
<<<<<<< Updated upstream
        catch (e) {
            console.log(e);
=======
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
                attributes: ['location', 'time', 'value'],
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
    static async findByCountryYearRangeAndMonth(country, startYear, endYear, month) {
        try {
            return await CCI.findAll({
                where: {
                    location: {
                        [Op.like]: `${country}`,
                    },
                    time: {
                        [Op.between]: [`${startYear}-01`, `${endYear}-12`],
                        [Op.like]: `%${month}`,
                    },
                },
                attributes: {
                    exclude: ['id', 'location', 'measure', 'indicator','frequency', 'subject','flag_codes']
                }
            }).then((function (list){
                console.log(list);
                return list;}));
        } catch (error) {
            console.error("findByCountryYearRangeAndMonth error: ", error);
            throw new Error("Error querying database");
        }

    }

    static async findByCountryYearAndMonthRange(country, year, startMonth, endMonth) {
        try {
            return await CCI.findAll({
                where: {
                    location: {
                        [Op.like]: `${country}`,
                    },
                    time: {
<<<<<<< Updated upstream
                        [Op.like]: `%${year}`,
=======
                        [Op.like]: `${year}%`,
>>>>>>> Stashed changes
                        [Op.between]: [`${year}-${startMonth}`, `${year}-${endMonth}`],
                    },
                },
                attributes: {
<<<<<<< Updated upstream
                    exclude: ['id', 'location', 'measure', 'indicator','frequency', 'subject','flag_codes']
                }
            }).then((function (list){
                console.log(list);
                return list;}));
=======
                    exclude: ['id', 'location', 'measure', 'indicator', 'frequency', 'subject', 'flag_codes']
                }
            });
>>>>>>> Stashed changes
        } catch (error) {
            console.error("findByCountryYearAndMonthRange error: ", error);
            throw new Error("Error querying database");
        }
<<<<<<< Updated upstream

    }
=======
    }


>>>>>>> Stashed changes
    /**
     * Creating and inserting new CCI instance
     **/
    static async createCCI(data) {
        try {
            const newCCI = {
               "location": data.location,
                "indicator": "CCI",
                "subject": "AMPLITUD",
                "measure": "LTRENDIDX",
                "frequency": "M",
                "time": data.time,
                "value": data.value,
                "flag_codes": ""

            }
            await CCI.create(newCCI);
            console.log("success!");
            return "success";

        } catch (error) {
            console.log(error);
>>>>>>> Stashed changes
        }
    }

}