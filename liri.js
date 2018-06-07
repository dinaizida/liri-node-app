// npm packages import :
// npm install  twitter --save
// npm install  node-spotify-api --save
// npm install  request --save
// npm install  fs --save
// npm install  dotenv --save
// npm install 

//code to read and set any environment variables with the dotenv package (to read keys from key.js file)
require("dotenv").config();

//// DEPENDENCIES:
var fs = require("fs");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request")
var keys = require("./keys");

// be able to access your keys information like so
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);



// declaring command variables-the name of a song, or movie
var action = process.argv[2];
var parameter = process.argv[3];


// switch case for a command that the user enters
switch (action) {
	case "my-tweets":
	twitter(parameter);
	break;

	case "spotify-this-song":
	spotify(parameter);
	break;

	case "movie-this":
	movie(parameter);
	break;

	case "do-what-it-says":
	doit();
	break;
};

function twitter(parameter){

    var params = {screen_name: parameter, count: 20};
	
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i ++){
                console.log("Tweet: " + "'" + tweets[i].text + "'" + " Created At: " + tweets[i].created_at);
            }
        } else {
            console.log(error);
        }
    });

}

function spotify(parameter){
    
}
function movie(parameter){
    
}
function doit(){
    
}