google.charts.load('current', {
    'packages': ['corechart']
});

function drawCombo_Chart(input_data, title) {
    const endpoint = 'http://127.0.0.1:3000/api/getByCountryYearAndMonthRange';
    const year = parseInt(document.getElementById("start-year").value);
    const startMonth = document.getElementById("start-month").value;
    const endMonth = document.getElementById("end-month").value;
    var selectElement=document.getElementById("countries");
    const dataPromises = [];
    const selectedCountries = Array.from(selectElement.selectedOptions).map(option => option.value);
    console.log(selectedCountries);
    for (let country of selectedCountries) {
        const url = `${endpoint}?data&country=${country}&startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
        console.log(url);
        const promise = fetch(url)
            .then(response => response.json());

        dataPromises.push(promise);
    }
    Promise.all(dataPromises)
        .then(results => {

            const combinedData = results.reduce((acc, data) => {
                return acc.concat(data);
            }, []);

            drawComboChart(combinedData, title);
        })
        .catch(error => {
            console.error(error);
        });
}



function drawComboChart(rawData, title) {
    var chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = "";


    document.getElementById("myChart").scrollIntoView({ behavior: "smooth" });
    // Extract unique locations from the data
    const locations = [...new Set(rawData.map(data => data.location))];


// Initialize the formatted data array with headers
    const formattedData = [['Month', ...locations, 'Average']];

// Create an object to store the monthly averages for each location
    const averages = {};

// Iterate over the data to calculate the averages
    for (const data of rawData) {
        const { time, location, value } = data;
        if (!averages[time]) {
            averages[time] = { count: 0, sum: 0 };
        }
        averages[time].count++;
        averages[time].sum += parseFloat(value);
    }


// Iterate over the averages to create the rows of formatted data
    for (const [time, averageData] of Object.entries(averages)) {
        const rowData = [time];
        for (const location of locations) {
            const locationData = rawData.find(data => data.location === location && data.time === time);
            rowData.push(locationData ? parseFloat(locationData.value) : null);
        }
        rowData.push(averageData.sum / averageData.count);
        formattedData.push(rowData);
    }

console.log(formattedData);

    const final_data = google.visualization.arrayToDataTable(formattedData);
    console.log(final_data);
    var options = {
        title: title,
        titleTextStyle: {
            color: 'black',
            fontName: 'Oxygen',
            fontSize: '25',
        },
        vAxis: {
            title: 'Index',
            textStyle: {
                color: 'black',
            },
            titleTextStyle: {
                color: 'black',
            }
        },
        textStyle: {
            color: 'black',
            fontName: 'Oxygen',
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
        backgroundColor: 'transparent',
        legend: {
            textStyle: {
                color: 'black'
            }
        },
        seriesType: 'bars',
        series: {
            0: {

                color: "#a80874"
            },
            1: {
                color: "#C490D1"
            },
            2: {
                color: "#631A86"
            },
            3: {
                color: "#a3c3d9"
            },
            4: {
                color: "#4c2a85"
            },
            5: {
                color: "#e5ae7d"
            },
            [locations.length]: {
                type: 'line'
            }


        },
        legend: { position: 'bottom'},
        height : 400,

    };
    var chartElement = document.createElement('div');
    chartElement.classList.add('chart-div');
    chartContainer.appendChild(chartElement);


    var chart = new google.visualization.ComboChart(chartElement);

    chart.draw(final_data, options);


}