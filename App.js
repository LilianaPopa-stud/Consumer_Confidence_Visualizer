const sqlite3= require('sqlite3').verbose();
const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const AdminController = require("./controllers/adminController");
const CCIController = require("./controllers/cciController");
const url = require('url');
const fs = require('fs');
const {findByCountryAndYearRange} = require("./server/services/cciService");



const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = 200;

    const reqUrl = url.parse(req.url);
    const path = reqUrl.pathname;
    if (path === '/' || path === '/INDEX.html') {
        directHTML('./HTML/INDEX.html', res);
    } else if (path === '/Favicon/site.webmanifest') {
        directManifest('./Favicon/site.webmanifest', res);
    } else if (path === '/Report.html') {
        directHTML('./HTML/Report.html', res)
    } else if (path === '/SelectChart.html') {
        directHTML('./HTML/SelectChart.html', res)}
    else if(path === '/BarChart.html'){
        directHTML('./HTML/BarChart.html', res)
    } else if (path === '/Table.html') {
        directHTML('./HTML/Table.html', res)
    } else if (path === '/Contact.html') {
        directHTML('./HTML/Contact.html', res)
    } else if (path === '/AdminLogIn.html') {
        directHTML('./HTML/AdminLogIn.html', res)
    } else if (path === '/AdminPanel.html') {
        directHTML('./HTML/AdminPanel.html', res)
    } else if (path === '/GeoChart.html') {
        directHTML('./HTML/GeoChart.html', res)
    }
    else if (path === '/ComboChart.html') {
        directHTML('./HTML/ComboChart.html', res)
    } else if (path === '/LineChart.html') {
        directHTML('./HTML/LineChart.html', res)
    } else if (path === '/CSS/admin.css') {
        directCSS('./CSS/admin.css', res)
    } else if (path === '/CSS/adminPanel.css') {
        directCSS('./CSS/adminPanel.css', res)
    } else if (path === '/CSS/charts.css') {
        directCSS('./CSS/charts.css', res)
    } else if (path === '/CSS/map.css') {
        directCSS('./CSS/map.css', res)
    } else if (path === '/CSS/report.css') {
        directCSS('./CSS/report.css', res)
    } else if (path === '/CSS/style.css') {
        directCSS('./CSS/style.css', res)
    } else if (path === '/CSS/table.css') {
        directCSS('./CSS/table.css', res)
    } else if (path === '/SCRIPTS/BarChart.js') {
        directJS('./SCRIPTS/BarChart.js', res)
    } else if (path === '/SCRIPTS/ChartSelect.js') {
        directJS('./SCRIPTS/ChartSelect.js', res)
    } else if (path === '/SCRIPTS/CoreChart.js') {
        directJS('./SCRIPTS/CoreChart.js', res)
    } else if (path === '/SCRIPTS/GeoChart.js') {
        directJS('./SCRIPTS/GeoChart.js', res)
    } else if (path === '/SCRIPTS/LineChart.js') {
        directJS('./SCRIPTS/LineChart.js', res)
    } else if (path === '/SCRIPTS/GeoChart.js') {
        directJS('./SCRIPTS/GeoChart.js', res)
    } else if (path === '/SCRIPTS/Table.js') {
        directJS('./SCRIPTS/Table.js', res)
    } else if (path === '/SCRIPTS/functions.js') {
        directJS('./SCRIPTS/functions.js', res)
    } else if (path === '/views/loginAdminView.js') {
        directJS('./views/loginAdminView.js', res)
    } else if (path === '/SCRIPTS/admin_utils.js') {
        directJS('./SCRIPTS/admin_utils.js', res)
    } else if (path === '/Favicon/favicon-16x16.png') {
        directImage('./Favicon/favicon-16x16.png', res);
    } else if (path === '/Favicon/favicon-32x32.png') {
        directImage('./Favicon/favicon-32x32.png', res);
    } else if (path === '/Favicon/android-chrome-192x192.png') {
        directImage('./Favicon/android-chrome-192x192.png', res);
    } else if (path === '/Favicon/android-chrome-512x512.png') {
        directImage('./Favicon/android-chrome-512x512.png', res);
    } else if (path === '/Favicon/apple-touch-icon.png') {
        directImage('./Favicon/apple-touch-icon.png', res);
    } else if (path === '/img/waving-hand.png') {
        directImage('./img/waving-hand.png', res);
    } else if (path === '/Favicon/favicon.ico') {
        fs.readFile('./Favicon/favicon.ico', function (err, data) {
            if (err) {
                throw err;
            } else {
                res.writeHead(200, {'Content-Type': 'image/x-icon'});
                res.write(data);
                res.end();
            }
        });
    } else if (path === '/img/scholarly-html.svg') {
        fs.readFile('./img/scholarly-html.svg', function (err, data) {
            if (err) {
                throw err;
            } else {
                res.writeHead(200, {'Content-Type': 'image/svg+xml'});
                res.write(data);
                res.end();
            }
        });
    } else if (path === '/test') {
        const startYear = 2018;
        const endYear = 2021;

        const data = await findByCountryAndYearRange('US', startYear, endYear);
        console.log(data);
        res.statusCode = 404;
        res.end('Data displayed in console');
    } else {
        await routing(path, res, req)
        res.statusCode = 200;
        res.end();
    }


});
function directImage(path, res) {
    fs.readFile(path, function (err, data) {
        if(err){
            throw err;
        } else{
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(data);
            res.end();
        }
    });
}
function directHTML(path, res){
    fs.readFile(path, function (err, data) {
        if(err){
            throw err;
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
}

function directCSS(path, res) {
    fs.readFile(path, function (err, data) {
        if(err){
            throw err;
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
            throw err;
        } else{
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.write(data);
            res.end();
        }
    });
}
function directManifest(path, res) {
    fs.readFile(path, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(data);
            res.end();
        }
    });
}

/**
 * Routes for API
 */

function routing(path, res, req) {
    switch (path) {
        case '/api/login':
            return AdminController.apiLoginAdmin(res, req);
        case '/api/getByCountryYearRangeAndMonth':
            return CCIController.apiGetCCIByCountryYearRangeAndMonth(res, req);
        case '/api/getByCountryYearAndMonthRange':
            return CCIController.apiGetCCIByCountryYearAndMonthRange(res, req);
        case '/api/getByCountryAndYearRange':
            return CCIController.apiGetCCIByCountryAndYearRange(res, req);
        case '/api/getCCIForAllCountriesByYearAndMonth':
            return CCIController.apiGetCCIForAllCountriesByYearAndMonth(res, req);
        case '/api/add':
            return CCIController.apiCreateCCI(res, req);
        case '/api/delete':
            return CCIController.apiDeleteCCI(res, req);
        case '/api/update':
            return CCIController.apiUpdateCCI(res, req);
    }
}
server.listen(port, hostname, () => {
    console.log(`Serverul rulează la adresa http://${hostname}:${port}/`);
});