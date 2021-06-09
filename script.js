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



// ACTUAL CODE STARTS HERE!!1

// do we need to namespace now???
const movieApp = {};

// storing our url and apikey in global variables 
movieApp.url = `https://api.themoviedb.org/3/discover/movie/`
movieApp.apikey = `a0e32a4a0c009553ac6020779811cc03`

// if this does not work, check for ? between url and api_key
// /bT3c4TSOP8vBmMoXZRDPTII6eDa.jpg
movieApp.getMovieData = () => {

  // PSSSUUUEEEDDDOOOO
  // use url constructor 
  // pass in apikey as api_key
  const apiUrl = new URL(movieApp.url)
  apiUrl.search = new URLSearchParams( {
    api_key: movieApp.apikey,
    // defining search parameters for genre & runtime (eventually)
    with_genres: '35',
    
    // with_runtime:lte: 120
    // ^^getting unknown error
  })
  // use fetch to make the api request 
  fetch(apiUrl)
  .then((results) => {
    return results.json()
  })
  .then((jsonResults) => {
    // movieApp.getMovieData(jsonResults)
    console.log(jsonResults)
    console.log(jsonResults.results[0].original_title);
    // defining movieTitle globally
    const movieTitle = jsonResults.results[0].original_title;
    const movieOverview = jsonResults.results[0].overview;
    const moviePoster = jsonResults.results[0].poster_path;
    const posterUrl = `https://image.tmdb.org/t/p/original`


    // trying to access original_title in api

    const displayMovie = () => {
      const firstPref = document.querySelector('#first-choice');
      firstPref.innerHTML = '';

      const h3Element = document.createElement('h3');
      h3Element.innerHTML = `${movieTitle}`

      const pElement = document.createElement('p');
      pElement.innerHTML = `${movieOverview}`

      const imgElement = document.createElement('img');
      // img.src = `${posterUrl}+${moviePoster}`;
      imgElement.src = posterUrl + moviePoster;
      // img.alt = 
      imgElement.innerHTML = ``;
      console.log(imgElement);

      // image.src = moviePoster;
      console.log(moviePoster)
      // h3Element.innerHTML = `<h2></h2>`
      // approve is displaying content, but not the content we want! 
      firstPref.appendChild(h3Element);
      firstPref.appendChild(pElement);
      firstPref.appendChild(imgElement);
      // h3Element.innerHTML = `<h2></h2>`
      // approve is displaying content, but not the content we want! 
      firstPref.appendChild(h3Element);
    }

    displayMovie();
  })
  // WE DID IT YYAAAAYYYY (almost...)
  
  // if there is trouble, try removing the extra brackets ^^^^
  
}

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





// console.log(movieApp.getMovieData[Object.results[0]])
// create variable for base URL & access key



// feting the API
//   fetch('https://api.themoviedb.org/3/discover/movie/?api_key=a0e32a4a0c009553ac6020779811cc03')
//   // endpoint was changed to discover 
//     .then((results) => {
//       return results.json()
//       // console.log(results)
//     })
//     .then((object) => {
//       console.log(object)
//     // trying to put original_title on the home page
//     // go inside of our object
//     // get original_title
//     // create element for original_title (<h2>)
//     // append it the page
//     const movieTitle = object.original_title;
//     const movieOverview = object.overview;
//     const movieHomepage = object.homepage;
//     const moviePoster = object.poster_path;
//     const movieDuration = object.runtime;
//     // document.querySelector('h2') = movieData;
//     console.log(movieTitle);
//     console.log(movieHomepage);
//     console.log(movieOverview);
//     console.log(moviePoster);
//     console.log(movieDuration);
//     // object.original_title;
//     // document.createElement('h2') = movieTitle;
//   })
// }

// make query params
// genre
// one for runtime ><

// ?_?


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


// already managed to target movie content inside the local namespace
// How do we target it in our global namespace?? HOW ?

// console.log(movieApp.getMovieData.movieTitle);
// ^^trying to access movieTitle in global namespace comes back undefined

// create function to display a piece of movie information
// create a variable to target our firstPref
// clear out the html content of our ul (for future appending)
// create an h3Element to append content to
// Decide what content goes in our h3Element
// place movieTitle variable in h2 to appear on page.

// movieApp.displayMovie = () => {
//   const firstPref = document.querySelector('.test-ul');
//   firstPref.innerHTML = '';
//   const h3Element = document.createElement('li');
//   h3Element.innerHTML = `<h2>hello world</h2>`
//   h3Element.innerHTML = `<h2></h2>`
//   // approve is displaying content, but not the content we want! 
//   firstPref.appendChild(h3Element);
// }

// movieApp.displayMovie();

// consider using filter() and forEach loop to more accurately target information
// try filtering by movieTitle or id




movieApp.init = () => {
  // calling the getMovieData upon initialization 
  movieApp.getMovieData();
  // movieApp.runtimeCheck();

};

// initializing the app
movieApp.init();






























  // appending TESTING below
  // append SOMETHING!?
  // const testMovie = [`Harry Potter`, `Not Harry Potter`]
  // console.log(testMovie[0])
  // const anyName = {};

  // anyName.displayMovie = () => {
  //   const movieElement = document.querySelector(`.results`)
  //   movieElement.innerHTML = `${testMovie[0]}`;
  //   console.log(`ARE YOU WORKING???`)
  // }

  // anyName.init = () => {
  //   anyName.displayMovie();
  // };