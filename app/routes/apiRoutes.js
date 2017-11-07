var friends = require("../data/friendsList.js");

module.exports = function(app) {
	// API Routes
	app.get("/api", function(req, res){
		res.json(friends);
	});
	app.post("/api", function(req,res){

		//Removes brackets from the object's array key
	    for (var key in req.body) {
	      if (/\[\]$/.test(key)) {
	        req.body[key.replace(/\[\]$/, '')] = req.body[key] || [];
	        delete req.body[key];
	      }
	    }
	    // End NullBracket Loop

	// Scores will be sorted with below variables
	var userScores = req.body.scores;
	//highScore defaults to impossible score
	var highScore = 37;
	//Match will be the index of the best match of the friends in the API
	var match = -1;

		// friendsList.js loop
		for (var i = 0; i < friends.length; i++) {
			var matchScore = 0;

			// Finds the difference in scores to match those closest together.
			for (var s = 0; s < 10; s++) {
				var diff = parseInt(friends[i].scores[s]) - parseInt(userScores[s]);
				//Totals up the score difference
				matchScore += Math.abs(diff);
			}
			// The best score will be the lowest of all the match scores
			if (matchScore < highScore) {
				highScore = matchScore;
				// Retrieves friend index
				match = i;
			}
		}

		// Transfers matched friend's information to the page
		res.json(friends[match]);
		// Copies new friend to friendsList.js
		friends.push(req.body)
	});

	//Resets the API to factory settings
	app.post("/api/reset", function() {	    
	    friends = reset;
	});
	};
}