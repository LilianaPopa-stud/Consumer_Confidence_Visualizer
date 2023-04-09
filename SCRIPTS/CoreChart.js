google.charts.load('current', {
    'packages': ['corechart']
});

function drawCoreChart() {
    var chartContainer = document.querySelector('.chart-container');
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Brazil', 'United States', 'Germany', 'Austria', 'Belgium','Greece','Average'],
        ['December', 102.02, 96.97, 97.27, 96.38, 98.22, 97.82,98.11],
        ['January', 99.90, 97.26, 97.82, 96.74, 98.76, 98.23,98.11],
        ['February', 99.84, 97.40, 98.24, 97.00, 99.14,98.40,98.33],
        ['March', 99.91, 97.31, 98.47, 97.17, 99.33,98.68,98.47],
    ]);

    var options = {
        title: 'CCI between December-March 2023',
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
            6: {
                type: 'line'
            },
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
        },
        legend: { position: 'bottom'},
        height : 400,

    };
    var chartElement = document.createElement('div');
    chartElement.classList.add('chart-div');
    chartContainer.appendChild(chartElement);


    var chart = new google.visualization.ComboChart(chartElement);

    chart.draw(data, options);


}