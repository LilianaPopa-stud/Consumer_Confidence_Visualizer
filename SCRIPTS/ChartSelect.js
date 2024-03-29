
function selectChart() {
    var chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = "";
    var chartType = document.getElementById("chart-type").value;
    document.getElementById("myChart").scrollIntoView({ behavior: "smooth" });

    switch(chartType) {
        case "geochart":
            window.location.href="GeoChart.html";
            break;
        case "corechart":
            window.location.href="ComboChart.html";
            break;
        case "barchart":
            window.location.href="BarChart.html";
            break;
        case "linechart":
            window.location.href="LineChart.html";
            break;
        case "table":
            window.location.href="Table.html";
            break;
        default:
            console.error("Invalid chart type selected.");
    }
}