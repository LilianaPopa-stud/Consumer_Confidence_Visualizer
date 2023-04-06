google.charts.load('current', {
    'packages': ['corechart'],
});
google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart() {
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
            title: 'Year',
            textStyle: {
                color: "#631A86"
            },
            titleTextStyle: {
                color: 'black',
            }
        },
        vAxis: {
            title: 'Index: Long-term Average = 100',
            textStyle: {
                color: "#631A86"
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
        width: 1000,
        height: 500
    };

    var chart = new google.visualization.LineChart(document.getElementById('barchart-div'));
    chart.draw(data, options);
}
