 google.charts.load('current', {
        'packages': ['geochart'],
    })
;


function drawGeoChart() {
    var chartContainer = document.querySelector('.chart-container');


    // Distrugeți harta existentă dacă există deja
    if (chartElement) {
        chartElement.parentNode.removeChild(chartElement);
    }

    var data = google.visualization.arrayToDataTable([
        ['Country', 'Index'],
        ['Australia', 97.6],
        ['Austria', 97.0],
        ['Belgium', 99.1],
        ['Brazil', 99.8],
        ['Chile', 95.1],
        ['Colombia', 94.7],
        ['Costa Rica', 102.5],
        ['Czech Republic', 98.1],
        ['Denmark', 97.4],
        ['Estonia', 94.4],
        ['European Union', 96.2],
        ['Finland', 96.6],
        ['France', 96.6],
        ['Germany', 98.5],
        ['Greece', 98.7],
        ['Hungary', 98.6],
        ['Italy', 100.0],
        ['Korea', 98.7],
        ['Latvia', 95.1],
        ['Lithuania', 95.1],
        ['Luxembourg', 97.4],
        ['Netherlands', 98.1],
        ['New Zealand', 97.4],
        ['Poland', 98.1],
        ['Portugal', 98.1],
        ['Russia', 95.1],
        ['Slovakia', 98.1],
        ['Slovenia', 98.1],
        ['South Africa', 95.1],
        ['Spain', 98.1],
        ['Sweden', 97.4],
        ['Turkey', 95.1],
        ['United Kingdom', 98.1],
        ['United States', 98.1]
    ]);

    var options = {
        backgroundColor: 'transparent',
        chartArea: {
            width: '100%',
            height: '100%'
        },
        colorAxis: {colors: ['#e5c6ef', '#54053b']},
    };


    var chartElement = document.createElement('div');
    chartElement.classList.add('geo-chart');
    chartContainer.appendChild(chartElement);

    var chart = new google.visualization.GeoChart(chartElement);

    chart.draw(data, options);
}
