/**
 * CCI SERVICE -> interacts directly with the database, via the Sequelize operations (findAll, count, create, etc...)
 * */
const  CciModel = require("../models/cciModel");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../connectionDatabase.config');
const CCI = CciModel(db, Sequelize);


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
    static async findAllCountriesByYearAndMonth(year, month) {
        try {
            return await CCI.findAll({
                where: {
                    time: {
                        [Op.like]: `${year}-${month}`,
                    },
                },
                attributes: ['location','value'],
            });
        } catch (error) {
            console.error("findAllCountriesByYearAndMonth error: ", error);
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
                        [Op.between]: [`${year}-${startMonth}`, `${year}-${endMonth}`],
                    },
                },
                attributes: {

                    exclude: ['id', 'measure', 'indicator', 'frequency', 'subject', 'flag_codes']
                }
            }).then((function (list) {
                console.log(list);
                return list;
            }));

        } catch (error) {
            console.error("findByCountryYearAndMonthRange error: ", error);
            throw new Error("Error querying database");
        }
    }
    /**
     * Updating CCI
     * */
    static async updateCCI(fields){
        try{
            const { location, time, value } = fields;
            const result = await CCI.update({ value }, {
                where: { location, time }
            });
                console.log("success");
                return result;
        }catch (error){
            console.log(`Error updating object ${error}`);
        }
    }

    /**
     * Deleting CCI
     * */
    static async deleteCCI(options) {
        const { location, time, value } = options;
        try {
            return await CCI.destroy({
                where : {
                    "location" : options.location,
                    "time" : options.time,
                    "value" : options.value
                }
            });
        } catch (error) {
            console.log(`Could not delete CCI ${error}`);
        }

    }

}
