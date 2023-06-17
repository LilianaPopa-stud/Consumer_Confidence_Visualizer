const CCIService = require('../server/services/cciService');
const {findByCountryAndYearRange} = require("../server/services/cciService");
let options;
module.exports = class CCI {

    static async apiGetCCIByCountryYearRangeAndMonth(res, req, next) {
        try {
            const urlParams = new URLSearchParams(req.url);
            const country = urlParams.get('country');
            const startYear = urlParams.get('startYear');
            const endYear = urlParams.get('endYear');
            const month = urlParams.get('month');
            let ccis = await CCIService.findByCountryYearRangeAndMonth(country, startYear, endYear, month);
            const dataValuesArray = ccis.map(cci => cci.dataValues);
            res.write(JSON.stringify(dataValuesArray));
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        }

    }
    // get all countries

    static async apiGetCCIByCountryAndYearRange(res, req, next) {
        try {
            const urlParams = new URLSearchParams(req.url);
            const country = urlParams.get('country');
            const startYear = urlParams.get('startYear');
            const endYear = urlParams.get('endYear');
            let ccis = await CCIService.findByCountryAndYearRange(country, startYear, endYear);
            const dataValuesArray = ccis.map(cci => cci.dataValues);
            res.write(JSON.stringify(dataValuesArray));
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        }

    }

    static async apiGetCCIByCountryYearAndMonthRange(res, req, next){
        try {
            const urlParams = new URLSearchParams(req.url);
            const country = urlParams.get('country');
            const year = urlParams.get('year');
            const startMonth = urlParams.get('startMonth');
            const endMonth = urlParams.get('endMonth');
            let ccis = await CCIService.findByCountryYearAndMonthRange(country, year, startMonth, endMonth);
            const dataValuesArray = ccis.map(cci => cci.dataValues);
            res.write(JSON.stringify(dataValuesArray));
            res.end();

        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        }
    }
    static async apiGetCCIByCountryYearAndMonthRange(res, req, next){
        try {
            const urlParams = new URLSearchParams(req.url);
            const country = urlParams.get('country');
            const year = urlParams.get('year');
            const startMonth = urlParams.get('startMonth');
            const endMonth = urlParams.get('endMonth');
            let ccis = await CCIService.findByCountryAndYearRange(country, year, startMonth, endMonth);
            const dataValuesArray = ccis.map(cci => cci.dataValues);
            res.write(JSON.stringify(dataValuesArray));
            res.end();

        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        }
    }

    /**
     * Creating and inserting into db new CCI instance
     * */
    static async apiCreateCCI(res, req, next) {
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        try {
            const createdCCI = await CCIService.createCCI(options);
            res.write('Success');
        } catch (error) {
            res.statusCode(500);
        }
    }

    /**
     * Updating  CCI
     * */
    static async apiUpdateCCI(res, req, next){
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });

        try {
            const updatedCCI = await CCIService.updateCCI(options);
            return "success";
        } catch (error) {
            res.statusCode(500);
            return "fail";
        }
    }

    /**
     * Deleting  CCI
     * */
    static async apiDeleteCCI(res, req, next) {
        const data = await req.on('data',function (data){
            options = JSON.parse(data);
        });
        console.log(options);
        try {
            const deleteResponse = await CCIService.deleteCCI(options);
            res.write(JSON.stringify(deleteResponse));
        } catch (error) {
            res.statusCode = 500;
        }
    }
}