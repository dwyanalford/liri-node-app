// grab the data from keys.js. Then store the keys in a variable.
var twitterKeys = require("./key.js");

// store the request package in a variable
var request = require("request");

// // Run a request using Twitter search API to show last 3 tweets and when they were created
// request("https://api.twitter.com/1.1/search/tweets.json?q=&result_type=recent&count=3", function(error, response, body) {

//     // Parse the body of the site and recover just the imdbRating
//     console.log("My last 3 Twitter feeds: " + JSON.parse(body));
// });


// REQUEST TO omdbapi DATABASE
	// store the movie name the user will input in a variable called movieName
	var movieName = process.argv[3];
	request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json", function(error, response, body) {
		var arg1 = "movie-this";
    // If the request is successful (i.e. if the response status code is 200)
	  if (!error && response.statusCode === 200) {

	    // Parse the body of the site and recover just the imdbRating
	    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
	    console.log("Movie Title:" + JSON.parse(body).Title);
	    console.log("Year Released:" + JSON.parse(body).Year);
	    console.log("IMDB Rating:" + JSON.parse(body).imdbRating);
	    console.log("Produced in:" + JSON.parse(body).Country);
	    console.log("Language:" + JSON.parse(body).Language);
	    console.log("Brief Plot:" + JSON.parse(body).Plot);
	    console.log("Actors:" + JSON.parse(body).Actors);
	    // console.log("Rotten Tomatoes Rating:" + JSON.parse(body).Ratings);
	    // console.log("Rotten Tomatoes URL:" + JSON.parse(body).imdbRating);
	  }
	  
	});