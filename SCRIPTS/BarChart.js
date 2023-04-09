google.charts.load('current', {
    'packages': ['corechart'],
});

function drawBarChart() {
    var chartContainer = document.querySelector('.chart-container');
    var data = google.visualization.arrayToDataTable([
        ['Year', 'OECD-Total'],
        ["Jan-2018", 101.1],
        ["Jan-2019", 100.7],
        ["Jan-2020", 100.7],
        ["Jan-2021", 99.0],
        ["Jan-2022", 98.9],
        ["Jan-2023", 97.4],
    ]);


    var options = {
        title: 'CCI between 2018-2023',
        titleTextStyle: {
            color: 'black',
            fontSize: '25',
            fontName: 'Oxygen',
        },
        annotations: {
            textStyle: {
                color: "#C490D1"
            },
            fontName: 'Oxygen',
            fontSize: '25',
        },
        hAxis: {
            title: 'Index: Long-term Average = 100',
            textStyle: {
                color: "#4c2a85"
            },
            titleTextStyle: {
                color: 'black',
            }
        },
        vAxis: {
            title: 'Year',
            textStyle: {
                color: "#4c2a85"
            },
            titleTextStyle: {
                color: 'black',
            }
        },
        series: {
            0: {
                color: "#a80874"
            }
        },

        color: "#C490D1",
        backgroundColor: 'transparent',
        legendTextStyle: {color: 'black', fontSize: 12, fontName: 'Oxygen'},
        legend : {position: 'bottom'},
        height: 400,
    };
    var chartElement = document.createElement('div');
    chartElement.classList.add('barchart-div');
    chartContainer.appendChild(chartElement);

    var chart = new google.visualization.BarChart(chartElement);

    chart.draw(data, options);

}
