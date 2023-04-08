function drawChart() {
    var chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = "";
    var chartType = document.getElementById("chart-type").value;
    switch(chartType) {
        case "geochart":
            drawGeoChart();
            break;
        case "corechart":
            drawCoreChart();
            break;
        case "barchart":
            drawBarChart();
            break;
        case "linechart":
            drawLineChart();
            break;
        case "table":
            drawTable();
            break;
        default:
            console.error("Invalid chart type selected.");
    }
}
