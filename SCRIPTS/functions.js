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