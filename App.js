const sqlite3= require('sqlite3').verbose();
const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;
const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = 200;

    const reqUrl = url.parse(req.url);
    const path = reqUrl.pathname;
    if(path === '/' || path === '/INDEX.html'){
        directHTML('./HTML/INDEX.html', res);}
    else if(path === '/Favicon/site.webmanifest'){
        directManifest('./Favicon/site.webmanifest', res);
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
    } else if(path === '/CSS/admin.css'){
       directCSS('./CSS/admin.css',res)
    } else if(path === '/CSS/adminPanel.css'){
        directCSS('./CSS/adminPanel.css',res)
    }  else if(path === '/CSS/charts.css'){
        directCSS('./CSS/charts.css',res)
    }  else if(path === '/CSS/map.css'){
        directCSS('./CSS/map.css',res)
    } else if(path === '/CSS/report.css'){
        directCSS('./CSS/report.css',res)
    }  else if(path === '/CSS/style.css'){
        directCSS('./CSS/style.css',res)
    }  else if(path === '/CSS/table.css'){
        directCSS('./CSS/table.css',res)
    } else if(path === '/SCRIPTS/BarChart.js') {
        directJS('./SCRIPTS/BarChart.js',res)
    } else if(path === '/SCRIPTS/ChartSelect.js') {
        directJS('./SCRIPTS/ChartSelect.js',res)
    } else if(path === '/SCRIPTS/CoreChart.js') {
        directJS('./SCRIPTS/CoreChart.js',res)
    } else if(path === '/SCRIPTS/GeoChart.js') {
        directJS('./SCRIPTS/GeoChart.js',res)
    } else if(path === '/SCRIPTS/LineChart.js') {
        directJS('./SCRIPTS/LineChart.js',res)
    } else if(path === '/SCRIPTS/Table.js') {
        directJS('./SCRIPTS/Table.js',res)
    }
    else if(path === '/Favicon/favicon-16x16.png'){
        directImage('./Favicon/favicon-16x16.png', res);
    }
    else if (path === '/Favicon/favicon-32x32.png') {
        directImage('./Favicon/favicon-32x32.png', res);
    }
    else if (path === '/Favicon/android-chrome-192x192.png') {
        directImage('./Favicon/android-chrome-192x192.png', res);
    }
    else if(path === '/Favicon/android-chrome-512x512.png'){
        directImage('./Favicon/android-chrome-512x512.png', res);
    }
    else if(path === '/Favicon/apple-touch-icon.png'){
        directImage('./Favicon/apple-touch-icon.png', res);
    }
    else if(path === '/Favicon/favicon.ico'){
        fs.readFile('./Favicon/favicon.ico', function (err, data) {
            if(err){
                throw err;
            } else{
                res.writeHead(200, {'Content-Type': 'image/x-icon'});
                res.write(data);
                res.end();
            }
        });
    }
    else if (path === '/img/scholarly-html.svg') {
        fs.readFile('./img/scholarly-html.svg', function (err, data) {
            if(err){
                throw err;
            } else{
                res.writeHead(200, {'Content-Type': 'image/svg+xml'});
                res.write(data);
                res.end();
            }
        });
    }
    else{
        res.statusCode = 404;
        res.end('Not found');
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
server.listen(port, hostname, () => {
    console.log(`Serverul rulează la adresa http://${hostname}:${port}/`);
});