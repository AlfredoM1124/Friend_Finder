var friends = require("../data/friendsList.js");

module.exports = function(app) {
	// API Routes
	app.get("/api", function(req, res){
		res.json(friends);
	});
	
}