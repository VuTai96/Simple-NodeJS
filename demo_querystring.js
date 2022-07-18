var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    console.log('>>> check req.url: ', req.url)
    console.log('>>> check url.pares: ', q)
    res.end(txt);
}).listen(8080);