# liri-node-app

# Project Description:

LIRI is a command line node app that takes in parameters and gives you back data.

App can take in one of the following commands:
-my-tweets
-spotify-this-song
-movie-this
-do-what-it-says

What Each Command Can Do:

-node liri.js my-tweets
This will show your last 20 tweets and when they were created at in your terminal/bash window.

-node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window
 * Artist(s)
 * The song's name
 * A preview link of the song from Spotify
 * The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.
  
-liri.js movie-this '<movie name here>'
  This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  
  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

-liri.js do-what-it-says
LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
  
# Technologies Used: 

Node JS, NPM, JavaScript, Twitter API, Spotify API, OMDB API. 


Screenshot of the output.




![Screen Shot](https://github.com/dinaizida/liri-node-app/blob/master/assets/images/git.png)

