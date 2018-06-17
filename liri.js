// npm packages import : // npm install  twitter --save // npm install  node-spotify-api --save // npm install  request --save // npm install  fs --save // npm install  dotenv --save // npm install 

//code to read and set any environment variables with the dotenv package (to read keys from key.js file)
require("dotenv").config();

//// DEPENDENCIES:
var fs = require("fs");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request")
var keys = require("./keys");

var divider = "\n------------------------------------------------------------\n\n";
// write all data into Log.txt file
var toLog = function(data) {
    fs.appendFile("log.txt", JSON.stringify(data, null, 2) + divider, function(err) {
        if (err) throw err;

        // Otherwise, it will print: "log.txt was updated!"
        console.log("log.txt was updated!");

    });
};

var selectOption = function(action, parameter) {
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

        default:
            console.log("LIRI doesn't know that");
    };
};

function twitter(parameter) {
    // be able to access your keys information 
    var client = new Twitter(keys.twitter);

    var params = {
        screen_name: parameter
    }; // as a parameter used BusinessOnWWW

    client.get('statuses/user_timeline', params, function(error, tweets, response) {

        if (!error) {
            var data = []; // only for 20 tweets - i < 20
            for (i = 0; i < 20; i++) {
                data.push({
                    'Number': i + 1,
                    created_at: tweets[i].created_at,
                    text: tweets[i].text
                });

            }
            console.log(data);
            toLog(data);
        };
    });
};

function spotify(parameter) {
    // Initialize the spotify API client using our client id and secret
    var spotify = new Spotify(keys.spotify);

    if (!parameter) {
        parameter = "Malibu"; // as a parameter used Malibu (Miley Cyrus)
    }
    spotify.search({
        type: 'track',
        query: parameter
    }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        // console.log(data);
        // console.log(data.tracks.items[0]);
        var songs = data.tracks.items;
        var data = [];

        for (var i = 0; i < songs.length; i++) {
            data.push({
                "Artist(s)": songs[i].artists[0].name,
                "Song name: ": songs[i].name,
                "Link Preview: ": songs[i].preview_url,
                "Album: ": songs[i].album.name
            });
        }
        console.log(data);
        toLog(data);
    });
};

function movie(parameter) {
    if (!parameter) {
        parameter = 'Mr. Nobody';
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body) {

        if (!error && response.statusCode === 200) {

            var jsonData = JSON.parse(body);
            var data = {
                "Title of the movie: ": jsonData.Title,
                "Year the movie came out: ": jsonData.Year,
                "Rated: ": jsonData.Rated,
                "IMDB Rating of the movie: ": jsonData.imdbRating,
                "Country where the movie was produced: ": jsonData.Country,
                "Language of the movie: ": jsonData.Language,
                "Plot of the movie: ": jsonData.Plot,
                "Actors in the movie: ": jsonData.Actors,
                "Rotten Tomatoes Rating of the movie: ": jsonData.Ratings[1].Value
            };

            console.log(data);
            toLog(data);
        }
    });
};

function doit() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);

        var array = data.split(',');

        if (array.length === 2) {
            selectOption(array[0], array[1]);
        } else if (array.length === 1) {
            selectOption(array[0]);
        }

    });

};

// function that takes comand line arguments to start switch function -selectOption
var start = function(argOne, argTwo) {
    selectOption(argOne, argTwo);
};
start(process.argv[2], process.argv[3]);