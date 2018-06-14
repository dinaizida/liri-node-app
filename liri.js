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

var divider = "\n------------------------------------------------------------\n\n";
function twitter(parameter){
	// as a parameter used BusinessOnWWW

    var params = {screen_name: parameter};
	
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
		
        if (!error) {
            for (i = 0; i < 20; i ++){

				       var tweetsData = ('Number: ' + (i + 1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
                console.log(tweetsData);
				
				
							 fs.appendFile("log.txt", tweetsData + divider, function(err) {
								if (err) throw err;
					
								// Otherwise, it will print: "log.txt was updated!"
								console.log("log.txt was updated for my-tweets!");
								
								});
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
		parameter = "Malibu";
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



		  fs.appendFile("log.txt", '\n'+ '\n'+  "Spotify Data for the song:" + parameter + '\n' +'\n'+ "Artist: " + data.tracks.items[0].artists[0].name +'\n', function(err) {
				if (err) throw err;
			
			console.log("log.txt was updated spotify-this-song!");
		  
		  });
		  fs.appendFile("log.txt", '\n'+ "Song name: " + data.tracks.items[0].name +'\n', function(err) {
	      if (err) throw err;
			
			console.log("log.txt was updated spotify-this-song!");
		  
		  });
		  fs.appendFile("log.txt", '\n'+ "Link Preview: " + data.tracks.items[0].preview_url +'\n', function(err) {
				if (err) throw err;
			
			console.log("log.txt was updated spotify-this-song!");
		  
		  });
		  fs.appendFile("log.txt", '\n'+ "Album: " + data.tracks.items[0].album.name +'\n' + divider, function(err) {
				if (err) throw err;
			
			console.log("log.txt was updated! spotify-this-song !");
		  
		  });
    });
   
}
function movie(parameter){

	if (!parameter){
		parameter = 'Mr. Nobody';
	}

	var queryUrl = "http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body) {
		
		if (!error && response.statusCode === 200) {

		    console.log("Title of the movie: " + JSON.parse(body).Title);
		    console.log("Year the movie came out: " + JSON.parse(body).Year);
		    console.log("IMDB Rating of the movie: " + JSON.parse(body).imdbRating);
		    console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[1].Value);
		    console.log("Country where the movie was produced: " + JSON.parse(body).Country);
		    console.log("Language of the movie: " + JSON.parse(body).Language);
		    console.log("Plot of the movie: " + JSON.parse(body).Plot);
			console.log("Actors in the movie: " + JSON.parse(body).Actors);
			
			fs.appendFile("log.txt", '\n'+ '\n'+  "Movie Data for the movie:" + parameter + '\n' +'\n'+ "Title of the movie: " + JSON.parse(body).Title +'\n', function(err) {
	      if (err) throw err;
				console.log("log.txt was updated for movie-this!");
			  
			  });

			fs.appendFile("log.txt", '\n'+ "Year the movie came out: " + JSON.parse(body).Year +'\n', function(err) {
	      if (err) throw err;
				console.log("log.txt was updated for movie-this!");
			  
			  });

			  fs.appendFile("log.txt", '\n'+ "IMDB Rating of the movie: " + JSON.parse(body).imdbRating +'\n', function(err) {
					if (err) throw err;
				console.log("log.txt was updated for movie-this!");
			  
			  });
			  fs.appendFile("log.txt", '\n'+ "Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[1].Value +'\n', function(err) {
					if (err) throw err;
				console.log("log.txt was updated for movie-this!");
			  
			  });  
			  fs.appendFile("log.txt", '\n'+ "Country where the movie was produced: " + JSON.parse(body).Country +'\n', function(err) {
					if (err) throw err;
				console.log("log.txt was updated for movie-this!");
			  
			  });
			  fs.appendFile("log.txt", '\n'+ "Language of the movie: " + JSON.parse(body).Language +'\n', function(err) {
					if (err) throw err;
				console.log("log.txt was updated for movie-this!");
			  
			  });
			  fs.appendFile("log.txt", '\n'+ "Plot of the movie: " + JSON.parse(body).Plot +'\n', function(err) {
					if (err) throw err;
				console.log("log.txt was updated for movie-this!");
			  
			  });
			  fs.appendFile("log.txt", '\n'+ "Actors in the movie: " + JSON.parse(body).Actors +'\n' + divider, function(err) {
					if (err) throw err;
				console.log("log.txt was updated for movie-this!");
			  
			  });
			
		}
	});

    
}
function doit(){
	
	fs.readFile("random.txt", "utf8", function(err, data){ 

		if(err){
			return console.log(err);
		}
		var array = data.split(',');
		action = array[0];
		parameter = array[1];

		var spotify = new Spotify(keys.spotify);

		spotify.search({ type: 'track', query: parameter }, function(err, data) {
		if (err){
			console.log('Error occurred: ' + err);
			return;
		}
		
		console.log("Artist: " + data.tracks.items[0].artists[0].name);
		console.log("Song name: " + data.tracks.items[0].name);
		console.log("Link Preview: " + data.tracks.items[0].preview_url);
		console.log("Album: " + data.tracks.items[0].album.name);
    });
      
	});

}