google.charts.load('current', {
    'packages': ['corechart']
});

function drawCoreChart() {
    console.log("drawComboChart");
    const endpoint = 'http://127.0.0.1:3000/api/getByCountryYearAndMonthRange';
<<<<<<< Updated upstream
    const country = 'OECD';
    const startMonth = parseInt(document.getElementById("start-month").value);
    const endMonth = parseInt(document.getElementById("end-month").value);
    const year = parseInt(document.getElementById("start-year").value);
    const url = `${endpoint}?data&country=${country}&startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
    console.log(url);
    const title = `CCI between ${startMonth} and ${endMonth} ${year}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            drawComboChart(data, title);
        });
}
function drawComboChart(input_data, title) {
    var chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = "";

=======
    const year = parseInt(document.getElementById("start-year").value);
    const startMonth = document.getElementById("start-month").value;
    const endMonth = document.getElementById("end-month").value;
    var selectElement=document.getElementById("countries");
    const title = `CCI between ${startMonth} and ${endMonth} ${year}`;
    const dataPromises = [];
    const selectedCountries = Array.from(selectElement.selectedOptions).map(option => option.value);
    for (let country of selectedCountries) {
        const url = `${endpoint}?data&country=${country}&startMonth=${startMonth}&endMonth=${endMonth}&year=${year}`;
        const promise = fetch(url)
            .then(response => response.json());

        dataPromises.push(promise);
    }
    Promise.all(dataPromises)
        .then(results => {

            const combinedData = results.reduce((acc, data) => {
                return acc.concat(data);
            }, []);
            
            drawComboChart(combinedData, title);
        })
        .catch(error => {
            console.error(error);
        });
}



function drawComboChart(input_data, title) {
    var chartContainer = document.querySelector('.chart-container');
    chartContainer.innerHTML = "";

>>>>>>> Stashed changes
    document.getElementById("myChart").scrollIntoView({ behavior: "smooth" });

    const newData = input_data.map(obj => {
        const date = new Date(obj.time); // Convertim stringul timp în obiect de tip Date
        const year = date.getFullYear(); // Obținem anul
        const month = date.toLocaleString('default', { month: 'short' }); // Obținem scurtă reprezentare textuală a lunii
        const formattedDate = `${month}-${year}`; // Formatăm data în formatul dorit
        const value = parseFloat(obj.value); // Convertim valoarea într-un număr cu zecimale
        return [formattedDate, value];
    });

    console.log(newData);
// Adăugarea unui rând pentru titlurile de coloane
    newData.unshift(['Month', 'OECD-Total']);
    const final_data = google.visualization.arrayToDataTable(newData);
    console.log(final_data);
    var options = {
        title: title,
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
        },
        legend: { position: 'bottom'},
        height : 400,

    };
    var chartElement = document.createElement('div');
    chartElement.classList.add('chart-div');
    chartContainer.appendChild(chartElement);


    var chart = new google.visualization.ComboChart(chartElement);

    chart.draw(final_data, options);


}