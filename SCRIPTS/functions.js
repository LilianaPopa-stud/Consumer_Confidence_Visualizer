function generateYearOptions() {
    const startYear = 1963;
    const currentYear = new Date().getFullYear()-1;
    const select = document.getElementById("start-year");
    for (let year = currentYear; year >= startYear; year--) {
        const option = document.createElement("option");
        option.value = year.toString();
        option.textContent = year.toString();
        select.appendChild(option);
    }

}
function generateEndYearOptions() {
    const endYear = 1963;
    const currentYear = new Date().getFullYear();
    const select = document.getElementById("end-year");
    for (let year = currentYear; year >= endYear; year--) {
        const option = document.createElement("option");
        option.value = year.toString();
        option.textContent = year.toString();
        select.appendChild(option);

    }
}
function generateMonthOptions() {
    const select = document.getElementById("month");
    const monthMapping = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"

    };
    const monthCodes = Object.keys(monthMapping).sort();

    monthCodes.forEach(monthCode => {
        const monthName = monthMapping[monthCode];
        const option = document.createElement("option");
        option.value = monthCode;
        option.textContent = monthName;
        select.appendChild(option);
    });
}
function generateStartMonthOptions() {

        const select = document.getElementById("start-month");
        const monthMapping = {
            "01": "January",
            "02": "February",
            "03": "March",
            "04": "April",
            "05": "May",
            "06": "June",
            "07": "July",
            "08": "August",
            "09": "September",
            "10": "October",
            "11": "November",
            "12": "December"

        };
        const monthCodes = Object.keys(monthMapping).sort();

        monthCodes.forEach(monthCode => {
            const monthName = monthMapping[monthCode];
            const option = document.createElement("option");
            option.value = monthCode;
            option.textContent = monthName;
            select.appendChild(option);
        });

}
function generateEndMonthOptions() {
    const monthMapping = {

        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"

    }
    const select = document.getElementById("end-month");
    const monthCodes = Object.keys(monthMapping).sort();

    monthCodes.forEach(monthCode => {
        const monthName = monthMapping[monthCode];
        const option = document.createElement("option");
        option.value = monthCode;
        option.textContent = monthName;
        select.appendChild(option);
    });
}

function generateCountryOptions() {
    const countryMapping = {
        USA: 'United States',
        NLD: 'Netherlands',
        CHE: 'Switzerland',
        FRA: 'France',
        POL: 'Poland',
        CZE: 'Czech Republic',
        JPN: 'Japan',
        OECDE: 'OECD Europe',
        AUS: 'Australia',
        OECD: 'OECD',
        SWE: 'Sweden',
        MEX: 'Mexico',
        GBR: 'United Kingdom',
        ZAF: 'South Africa',
        HUN: 'Hungary',
        PRT: 'Portugal',
        DNK: 'Denmark',
        ESP: 'Spain',
        LUX: 'Luxembourg',
        GRC: 'Greece',
        BRA: 'Brazil',
        SVK: 'Slovak Republic',
        CHN: 'China',
        BEL: 'Belgium',
        FIN: 'Finland',
        NZL: 'New Zealand',
        IDN: 'Indonesia',
        TUR: 'Turkey',
        AUT: 'Austria',
        ITA: 'Italy',
        IRL: 'Ireland',
        SVN: 'Slovenia',
        DEU: 'Germany',
        KOR: 'Korea',
        EST: 'Estonia',
        ISR: "Israel",
        RUS: "Russia",
        LVA: "Latvia",
        LTU: "Lithuania",
        COL: "Colombia",
        CHL: "Chile",
        CRI: "Costa Rica",
    };


    const selectElement = document.getElementById("countries");
    const countryCodes = Object.keys(countryMapping).sort();

    countryCodes.forEach(countryCode => {
        const countryName = countryMapping[countryCode];
        const option = document.createElement("option");
        option.value = countryCode;
        option.textContent = countryName;
        selectElement.appendChild(option);
    });
}