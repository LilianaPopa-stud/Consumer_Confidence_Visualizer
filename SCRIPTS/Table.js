google.charts.load('current', {'packages': ['table']});


function drawTableChart() {

    var startYear = parseInt(document.getElementById("start-year").value);
    var endYear = startYear;
    var selectElement = document.getElementById("countries");
    const endpoint = 'http://127.0.0.1:3000/api/getByCountryAndYearRange';
    const dataPromises = [];
    const selectedCountries = Array.from(selectElement.selectedOptions).map(option => option.value);

    for (let country of selectedCountries) {
        const url = `${endpoint}?data&country=${country}&startYear=${startYear}&endYear=${endYear}`;
        console.log(url);
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                dataPromises.push(data);
                if (dataPromises.length === selectedCountries.length) {
                    // When all data promises are resolved, proceed to draw the chart
                    Promise.all(dataPromises)
                        .then(results => {
                            const combinedData = results.reduce((acc, data) => {
                                return acc.concat(data);
                            }, []);

                            drawTable(startYear, combinedData);
                        })
                        .catch(error => {
                            console.error(error);
                        });
                }
            } else if (xhr.readyState === 4) {
                console.error('Eroare la efectuarea cererii:', xhr.status);
            }
        };

        xhr.send();
    }


}

function drawTable(startYear, combinedData) {
    var chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = "";
    document.getElementById("myChart").scrollIntoView({behavior: "smooth"});
    var data = new google.visualization.DataTable();

    const columns = ['Country'];
    const timePeriods = Array.from(new Set(combinedData.map(item => item.time)));

    timePeriods.sort();
    timePeriods.forEach(time => {
        const [year, month] = time.split('-');
        const shortMonth = new Date(`${year}-${month}`).toLocaleString('default', {month: 'short'});
        const columnName = `${shortMonth}-${year}`;
        columns.push(columnName);
    })

    columns.forEach(column => {
        data.addColumn('string', column)
    });
    const countries = Array.from(new Set(combinedData.map(item => item.location)));

    countries.forEach(country => {
        const rowData = [mapCountry(country)];
        timePeriods.forEach(time => {
            const matchingData = combinedData.find(item => item.location === country && item.time === time);
            const value = matchingData.value || 'N/A';
            rowData.push(value);
        });
        data.addRow(rowData);
    });


    var cssClassNames = {
        'headerRow': 'cssHeaderRow',
        'tableRow': 'cssTableRow',
        'oddTableRow': 'cssOddTableRow',
        'selectedTableRow': 'cssSelectedTableRow',
        'hoverTableRow': 'cssHoverTableRow',
        'headerCell': 'cssHeaderCell',
        'tableCell': 'cssTableCell',
    };

    var options = {
        showRowNumber: false,
        cssClassNames: cssClassNames

    };
    var chartElement = document.createElement('div');
    chartElement.classList.add('table_div');
    chartContainer.appendChild(chartElement);

    var chart = new google.visualization.Table(chartElement);

    chart.draw(data, options);

}

function mapCountry(country) {
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
        IND: "India",
    };
    return countryMapping[country];

}