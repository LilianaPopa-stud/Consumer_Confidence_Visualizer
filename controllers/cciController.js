const CCIService = require('../server/services/cciService');
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
            console.log(dataValuesArray);
            res.write(JSON.stringify(dataValuesArray));
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        }

    }
}