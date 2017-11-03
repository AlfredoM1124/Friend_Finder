// Declare NPM dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);

// Server listening 
app.listen(PORT, function() {
	console.log("App Listening On PORT " + PORT);
});