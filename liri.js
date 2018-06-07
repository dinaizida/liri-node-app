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