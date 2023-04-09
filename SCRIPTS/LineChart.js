google.charts.load('current', {'packages':['corechart']});

function drawLineChart() {
    var chartContainer = document.querySelector('.chart-container');
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Italy', 'Ireland', 'France', 'Spain', 'Finland', 'Belgium'],
        ['Apr-2020', 100.5, 95, 98.4, 97, 94, 102.8],
        ['May-2020', 99, 103, 97, 101.6, 98.4, 101],
        ['Jun-2020', 98.4, 96, 93, 101.4, 99.3, 102],
        ['Apr-2021', 100.5, 95.3, 97.8, 100, 95, 102],
        ['May-2021', 97, 96, 94, 102, 96, 100.4],
        ['Jun-2021', 98.1, 95, 95.9, 102, 102.8, 99.9],
        ['Apr-2022', 98.5, 96.8, 96.5, 101, 101.2, 99.5],
        ['May-2022', 95, 98, 97, 100, 102.6 , 97],
        ['Jun-2022', 96.8, 95.5, 97.9, 99.5, 100.5, 96.5]
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
            4: {
                color: "#f06c6f"
            },
            5: {
                color: "#ef0054"
            }

           
        },
        color: "#C490D1",
        backgroundColor: 'transparent',
        legendTextStyle: {color: 'black', fontSize: 12, fontName: 'Oxygen'},
        legend : {position: 'bottom'},
        curveType: 'function',
        height: 500,
        
  };
    var chartElement = document.createElement('div');
    chartElement.classList.add('linechart-div');
    chartContainer.appendChild(chartElement);

    var chart = new google.visualization.LineChart(chartElement);

    chart.draw(data, options);

}

