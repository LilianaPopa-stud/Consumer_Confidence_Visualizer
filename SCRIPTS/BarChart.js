google.charts.load('current', {
    'packages': ['corechart'],
});

function drawBarChart() {
    console.log("drawBarChart");
    const endpoint = 'http://127.0.0.1:3000/api/getByCountryYearRangeAndMonth';
    const country = 'OECD';
    const startYear = parseInt(document.getElementById("start-year").value);
    const endYear = parseInt(document.getElementById("end-year").value);
    const month = "01";
    const url = `${endpoint}?data&country=${country}&startYear=${startYear}&endYear=${endYear}&month=${month}`;
    console.log(url);
    const title = `CCI between ${startYear} and ${endYear}`;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            drawChart(data, title);
        } else {
            console.log('Eroare la efectuarea cererii:', request.status);
        }
    };

    request.send();


}

function drawChart(input_data, title) {

    var chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = "";

    document.getElementById("myChart").scrollIntoView({behavior: "smooth"});

    const newData = input_data.map(obj => {
        const date = new Date(obj.time); // Convertim stringul timp în obiect de tip Date
        const year = date.getFullYear(); // Obținem anul
        const month = date.toLocaleString('default', {month: 'short'}); // Obținem scurtă reprezentare textuală a lunii
        const formattedDate = `${month}-${year}`; // Formatăm data în formatul dorit
        const value = parseFloat(obj.value); // Convertim valoarea într-un număr cu zecimale
        return [formattedDate, value];
    });

    console.log(newData);
// Adăugarea unui rând pentru titlurile de coloane
    newData.unshift(['Year', 'OECD-Total']);
    const final_data = google.visualization.arrayToDataTable(newData);
    console.log(final_data);

    var options = {
        title: title,
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
        legend: {position: 'bottom'},
        height: 400,
    };
    var chartElement = document.createElement('div');
    chartElement.classList.add('barchart-div');
    chartContainer.appendChild(chartElement);

    var chart = new google.visualization.BarChart(chartElement);

    chart.draw(final_data, options);

}
