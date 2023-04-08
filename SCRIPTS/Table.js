google.charts.load('current', {'packages':['table']});

function drawTable() {
    var chartContainer = document.querySelector('.chart-container');
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Location');
    data.addColumn('number', 'Apr-2020');
    data.addColumn('number', 'May-2020');
    data.addColumn('number', 'Jun-2020');
    data.addColumn('number', 'Apr-2021');
    data.addColumn('number', 'May-2021');
    data.addColumn('number', 'Jun-2021');
    data.addColumn('number', 'Apr-2022');
    data.addColumn('number', 'May-2022');
    data.addColumn('number', 'Jun-2022');

    data.addRows([
        ['Italy',	100.5, 99, 98.4,
        100.5, 97, 98.1,
        98.5, 95, 96.5,],
        ['Germany',	95, 103, 96, 
        95.3, 96, 95,
        96.8, 98, 96.5],
        ['France',	98.4, 97, 93,
        97.8, 94, 95.9,
        96.5, 97, 96.5],
        ['Spain',97, 101.6, 101.4, 
        100, 102, 102,
        101, 100, 99.5],
    ]);
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
    chartElement.classList.add('table-div');
    chartContainer.appendChild(chartElement);

    var chart = new google.visualization.Table(chartElement);

    chart.draw(data, options);

}