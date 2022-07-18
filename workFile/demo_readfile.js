var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('./workFile/demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
    console.log('>>check create server')
    // fs.appendFile('./workFile/mynewfile1.txt', 'Hello content1!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });
    // fs.open('./workFile/mynewfile2.txt', 'w', function (err, file) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //     console.log('checkfile', file)
    // });
    // let a = 'Taivu'
    // fs.writeFile('./workFile/mynewfile3.txt', `Hello ${a}!`, function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });
    fs.rename('./workFile/mynewfile1.txt', './workFile/myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });

}).listen(8080);
console.log('Run demo_readfile.js')

