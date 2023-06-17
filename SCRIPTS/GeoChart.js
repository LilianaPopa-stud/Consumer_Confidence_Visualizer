 google.charts.load('current', {
        'packages': ['geochart'],
    })
;
function fetchApiAndDrawGeoChart() {

    const startYear = parseInt(document.getElementById("start-year").value);
    const month = document.getElementById("month").value;
    const endpoint = 'http://127.0.0.1:3000/api/getCCIForAllCountriesByYearAndMonth';
    const url = `${endpoint}?data&startYear=${startYear}&month=${month}`;
    fetch(url).then((response) => response.json()).then((data) => {
        drawGeoChart(data);
    });


}


function drawGeoChart(input_data) {
    var chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = "";
    if (chartElement) {
        chartElement.parentNode.removeChild(chartElement);
    }

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


    const new_data = input_data.map((obj)=>{
        return [countryMapping[obj.location], obj.value];
    })
    // eliminate undefined values
    const filtered_data = new_data.filter((obj)=>{
        return obj[0] !== undefined;});
    const formattedData = [['Country', 'Index']]; // Initialize the formatted data array

    for (const [country, index] of filtered_data) {
        formattedData.push([country, parseFloat(index)]);
    }

    var data = google.visualization.arrayToDataTable(formattedData);

    var options = {
        backgroundColor: 'transparent',
        chartArea: {
            width: '100%',
            height: '100%'
        },
        colorAxis: {colors: ['#e5c6ef', '#54053b']},
    };


    var chartElement = document.createElement('div');
    chartElement.classList.add('geo-chart');
    chartContainer.appendChild(chartElement);

    var chart = new google.visualization.GeoChart(chartElement);

    chart.draw(data, options);

}
