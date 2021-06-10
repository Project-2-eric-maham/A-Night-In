// Idea #2
// MOVIE APP YAYYY

// **HTML pseudo code**
// start with landing page layout
// create a form with dropdown menu
// submit button to submit user preferences

// **CSS pseudo code**
// Sass oooo
// Dont forget to watch sass (VERY IMPORTANT)
// Partials: for setup, mixins/variables, form and landing page(More to come)
// Pick some colors and fonts for theme of the page
// figure out how to use Grids for dynamic content
// Styling for appendable content (can be done along JS)

// **JS pseudo code**
// creating namespace object
// sorting URL and access key in variable
// app.init so we dont forget it
// get data from Api
// returning data as json
// display data to page
// compute logic of duration 
// if (i === || i < selectedDuration) {
  // show the data from api }
// filter an array and use Math.random to pick a random movie from that array
// use above method to display multiple results
// buttons for more results/refresh form settings



// ACTUAL CODE STARTS HERE!!

const movieApp = {};

// storing our url and apikey in global variables 
movieApp.url = `https://api.themoviedb.org/3/discover/movie/`
movieApp.apikey = `a0e32a4a0c009553ac6020779811cc03`

movieApp.getMovieData = (genreChoice) => {
  // use url constructor 
  // pass in apikey as api_key
  const apiUrl = new URL(movieApp.url)
  apiUrl.search = new URLSearchParams( {
    api_key: movieApp.apikey,
    // defining search parameters for genre & runtime (eventually)
    with_genres: genreChoice,
    // with_runtime: {
    //   gte: 180,
    // }
  })
  fetch(apiUrl)
  .then((results) => {
    return results.json()
  })
  .then((jsonResults) => {
    movieApp.displayMovie(jsonResults);
    console.log(jsonResults);
  })
}
// console.log(movieApp.getMovieData);
movieApp.displayMovie = (jsonResults) => {

  const movieTitle = jsonResults.results[0].original_title;
  const movieOverview = jsonResults.results[0].overview;
  const moviePoster = jsonResults.results[0].poster_path;
  const posterUrl = `https://image.tmdb.org/t/p/original`
  
  const firstPref = document.querySelector('#first-choice');
  firstPref.innerHTML = '';

  const h3Element = document.createElement('h3');
  h3Element.innerHTML = `${movieTitle}`

  const pElement = document.createElement('p');
  pElement.innerHTML = `${movieOverview}`

  const imgElement = document.createElement('img');
  imgElement.src = posterUrl + moviePoster;
  imgElement.innerHTML = ``;
    
  firstPref.appendChild(h3Element);
  firstPref.appendChild(pElement);
  firstPref.appendChild(imgElement);    
}

movieApp.setUpEventListeners = function(){
  document.querySelector('#form').addEventListener('submit', function(event){
    event.preventDefault();
    // on submit targeting gnere and duration within the form
    console.log(genre.value);
    console.log(form.duration.value);
    movieApp.getMovieData(genre.value);
  })
}

movieApp.init = () => {
  movieApp.getMovieData();
  movieApp.setUpEventListeners();
};

movieApp.init();



// Accept input from multiple genres and single duration
// assign genre name to genre id
// on submit collect/listen for genre id selection 
// put selected genere id into our initial searchParam
// review error handling for selecting same genre

// logic for duration
// user select from 3 option
//  Short has a value of 90 mins
//  long has a value of 120mins
//  longest --->>> 120+
//  for short and long run selection with_runtime.lte
// for longest with_runtimr.gte




//CREATING FILTER
  //write a function that will filter the movie data
  // create an array with the result of the filter inside our namespace
  // return result for movies with runtime of 139 minutes 
  // whats the name of our api? 

  // movieApp.runtimeCheck = () => {
  //   movieApp.runtimeTest = getMovieData.filter((param) => {
  //     return param.movieDuration === 139;
  //   })
  // }



// consider using filter() and forEach loop to more accurately target information
// try filtering by movieTitle or id