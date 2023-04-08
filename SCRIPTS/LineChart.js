google.charts.load('current', {'packages':['corechart']});

function drawLineChart() {
    var chartContainer = document.querySelector('.chart-container');
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Italy', 'Germany', 'France', 'Spain'],
    ['Apr-2020', 100.5, 95, 98.4, 97],
    ['May-2020', 99, 103, 97, 101.6],
    ['Jun-2020', 98.4, 96, 93, 101.4],
    ['Apr-2021', 100.5, 95.3, 97.8, 100],
    ['May-2021', 97, 96, 94, 102],
    ['Jun-2021', 98.1, 95, 95.9, 102],
    ['Apr-2022', 98.5, 96.8, 96.5, 101],
    ['May-2022', 95, 98, 97, 100],
    ['Jun-2022', 96.5, 96.5, 96.5, 99.5]
  ]);

  var options = {
    title: 'CCI between 2020 - 2022',
    titleTextStyle: {
        color: 'black',
        fontName: 'Oxygen',
        fontSize: '25',},

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
           
        },
        color: "#C490D1",
        backgroundColor: 'transparent',
        legendTextStyle: {color: 'black', fontSize: 12, fontName: 'Oxygen'},
        width: 1000,
        height: 500,
        curveType: 'function'
  };
    var chartElement = document.createElement('div');
    chartElement.classList.add('linechart-div');
    chartContainer.appendChild(chartElement);

    var chart = new google.visualization.LineChart(chartElement);

    chart.draw(data, options);

}
