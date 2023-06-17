function generateYearOptions() {
    const startYear = 1963;
    const currentYear = new Date().getFullYear()-3;
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
    const monthMapping = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    };

    const select = document.getElementById("start-month");

    for (let month = 12; month >= 1; month--) {
        const option = document.createElement("option");
        option.value = month.toString();
        option.text = monthMapping[month]; // Adaugă textul corespunzător luni
        select.appendChild(option);
    }
}

function generateStartMonthOptions() {
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

    const select = document.getElementById("start-month");
    const monthCodes = Object.keys(monthMapping).sort();
    console.log(monthCodes);
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
    console.log(monthCodes);
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
        IND: "India"
    };


    const selectElement = document.getElementById("countries");
    const countryCodes = Object.keys(countryMapping).sort();

    // Generate options for each country code
    countryCodes.forEach(countryCode => {
        const countryName = countryMapping[countryCode];
        const option = document.createElement("option");
        option.value = countryCode;
        option.textContent = countryName;
        selectElement.appendChild(option);
    });
}