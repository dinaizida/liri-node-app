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
// var spotify = new Spotify(keys.spotify);
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
	// as a parameter used BusinessOnWWW

    var params = {screen_name: parameter};
	
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
		
        if (!error) {
            for (i = 0; i < 20; i ++){
                console.log("Tweet: " + "'" + tweets[i].text + "'" + " Created At: " + tweets[i].created_at);
            }
        } else {
            console.log(error);
        }
    });

}

function spotify(parameter){
    // as a parameter used Malibu (Miley Cyrus)
	var spotify = new Spotify(keys.spotify);

	if (!parameter){
		parameter = 'The Sign';
	}
	spotify.search({ type: 'track', query: parameter }, function(err, data) {
		if (err){
			console.log('Error occurred: ' + err);
			return;
		}
		// console.log(data);
		// console.log(data.tracks.items[0]);
		console.log("Artist: " + data.tracks.items[0].artists[0].name);
		console.log("Song name: " + data.tracks.items[0].name);
		console.log("Link Preview: " + data.tracks.items[0].preview_url);
		console.log("Album: " + data.tracks.items[0].album.name);
    });
   
}
function movie(parameter){

	
    
}
function doit(){
    
}