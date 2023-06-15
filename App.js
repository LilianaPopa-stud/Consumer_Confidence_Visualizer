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