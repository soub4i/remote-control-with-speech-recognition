var fs = require("fs");
var https = require('https');
var express = require('express');

var app = express();


app.use(express.static(__dirname + '/public'));

var privateKey = fs.readFileSync('privatekey.pem').toString();
var certificate = fs.readFileSync('certificate.pem').toString();

var httpOptions = {key: privateKey, cert: certificate};

 https.createServer(httpOptions, app).listen(8000, () => {  
    console.log(">> Serving on " + 8000);  
}); 

app.get('/', function(req, res) {  
    res.sendFile(__dirname + '/public/index.html');  
});  