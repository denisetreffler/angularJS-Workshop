// SETUP ====================================================================

var express  = require('express');
var app      = express();
var port  	 = process.env.PORT || 3000;


// CONFIG ===================================================================

app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/app/', {'extensions': ['html', 'json']}));

// LISTEN ===================================================================

app.listen(port);
console.log("App listening on port " + port);