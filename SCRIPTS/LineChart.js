google.charts.load('current', {'packages': ['corechart']});


function drawLineChart() {
    console.log("drawLineChart");
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

                            drawChart(startYear, combinedData);
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

function drawChart(startYear, combinedData) {

    var chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = "";
    document.getElementById("myChart").scrollIntoView({behavior: "smooth"});
    var data = new google.visualization.DataTable();


    const countries = [...new Set(combinedData.map(item => item.location))];

    const formattedCountries = countries.map(country => mapCountry(country));
    const formattedData = [['Month', ...formattedCountries]]; // Initialize the formatted data array with headers

// Iterate over each month
    const timePeriods = [...new Set(combinedData.map(item => item.time))];
    for (const time of timePeriods) {
        const rowData = [`${time.split('-')[1]}-${time.split('-')[0]}`]; // Initialize the row data with the month

        // Iterate over each country
        for (const country of countries) {
            const data = combinedData.find(d => d.location === country && d.time === time);
            rowData.push(data ? parseFloat(data.value) : null);
        }

        formattedData.push(rowData);
    }
    const final_data = google.visualization.arrayToDataTable(formattedData);

    console.log(formattedData);

    const title = `CCI in ${startYear}`;

    var options = {
        title: title,
        titleTextStyle: {
            color: 'black',
            fontName: 'Oxygen',
            fontSize: '25',
        },

        annotations: {
            textStyle: {
                color: 'black'
            },
            fontName: 'Oxygen',
            fontSize: '25',
        },
        hAxis: {
            title: 'Month',
            textStyle: {
                color: 'black'
            },
            titleTextStyle: {
                color: 'black',
            }
        },
        vAxis: {
            title: 'Index',
            textStyle: {
                color: 'black'
            },
            titleTextStyle: {
                color: 'black',
            }
        },
        seriesType: 'line',
        color: "#C490D1",
        backgroundColor: 'transparent',
        legendTextStyle: {color: 'black', fontSize: 12, fontName: 'Oxygen'},
        legend: {position: 'bottom'},
        curveType: 'function',
        height: 500,

    };
    var chartElement = document.createElement('div');
    chartElement.classList.add('linechart-div');
    chartContainer.appendChild(chartElement);

    var chart = new google.visualization.LineChart(chartElement);

    chart.draw(final_data, options);

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