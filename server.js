var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'./public'));
app.use(function(req, res, next) {
    req.rootDir = __dirname;
    next();
});
require('./app/routes')(app);
app.listen(port, () => {
    console.log('server listening at '+port);
});