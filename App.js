const http = require('http');
const hostname = '127.0.0.1';
const port = 6789;
const url = require('url');
const fs = require('fs');
const server = http.createServer( (req, res) => {

    res.statusCode = 200;
    const reqUrl = url.parse(req.url);
    const path = reqUrl.pathname;
    if(path === '/'){
        directHTML('./HTML/INDEX.html', res);
    }
    else if(path === './CSS/style.css'){
        fs.readFile('./src/webapp/public/styles/loader.css', function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(page);
            res.end();
        });
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
server.listen(port, hostname, () => {
    console.log(`Serverul rulează la adresa http://${hostname}:${port}/`);
});