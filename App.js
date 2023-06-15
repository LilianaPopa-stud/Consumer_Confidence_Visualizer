const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = 200;
    const reqUrl = url.parse(req.url);
    const path = reqUrl.pathname;
    if(path === '/'){
        directHTML('./HTML/INDEX.html', res);
    } else if (path === '/Report.html'){
        directHTML('./HTML/Report.html', res)
    } else if (path === '/Charts.html') {
        directHTML('./HTML/Charts.html', res)
    } else if (path === '/Contact.html') {
        directHTML('./HTML/Contact.html', res)
    } else if (path === '/AdminLogIn.html') {
        directHTML('./HTML/AdminLogIn.html', res)
    } else if (path === '/AdminPanel.html') {
        directHTML('./HTML/AdminPanel.html', res)
    } else if(path === '/admin.css'){
       directCSS('./CSS/admin.css')
    } else if(path === 'adminPanel.css'){
        directCSS('./CSS/adminPanel.css')
    }  else if(path === 'charts.css'){
        directCSS('./CSS/charts.css')
    }  else if(path === 'map.css'){
        directCSS('./CSS/map.css')
    } else if(path === 'report.css'){
        directCSS('./CSS/report.css')
    }  else if(path === 'style.css'){
        directCSS('../CSS/style.css')
    }  else if(path === 'table.css'){
        directCSS('./CSS/table.css')
    } else if(path == 'BarChart.js') {
        directJS('.SCRIPTS/BarChart.js')
    } else if(path == 'ChartSelect.js') {
        directJS('.SCRIPTS/ChartSelect.js')
    } else if(path == 'CoreChart.js') {
        directJS('.SCRIPTS/CoreChart.js')
    } else if(path == 'GeoChart.js') {
        directJS('.SCRIPTS/GeoChart.js')
    } else if(path == 'LineChart.js') {
        directJS('.SCRIPTS/LineChart.js')
    } else if(path == 'Table.js') {
        directJS('.SCRIPTS/Table.js')
    }

});
function directHTML(path, res){
    fs.readFile(path, function (err, data) {
        if(err){
            res.statusCode = 404;
            res.end('Not found');
        }else{
            res.write(data);
            res.end();
        }
    });
}

function directCSS(path, res) {
    fs.readFile(path, function (err, data) {
        if(err){
            res.statusCode = 404;
            res.end('Not found');
        } else{
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        }
    });
}

function directJS(path, res) {
    fs.readFile(path, function (err, data) {
        if(err){
            res.statusCode = 404;
            res.end('Not found');
        } else{
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(data);
            res.end();
        }
    });
}
server.listen(port, hostname, () => {
    console.log(`Serverul rulează la adresa http://${hostname}:${port}/`);
});