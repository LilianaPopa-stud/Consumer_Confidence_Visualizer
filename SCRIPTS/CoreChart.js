google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
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
        }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}