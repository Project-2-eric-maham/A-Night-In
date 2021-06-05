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

const getMovieData = () => {

// feting the API
  fetch('https://api.themoviedb.org/3/movie/550?api_key=a0e32a4a0c009553ac6020779811cc03')
    .then((results) => {
      return results.json()
      // console.log(results)
    })
    .then((object) => {
      console.log(object)
    // trying to put original_title on the home page
    // go inside of our object
    // get original_title
    // create element for original_title (<h2>)
    // append it the page
    const movieTitle = object.original_title;
    const movieOverview = object.overview;
    const movieHomepage = object.homepage;
    const moviePoster = object.poster_path;
    const movieDuration = object.runtime;
    // document.querySelector('h2') = movieData;
    console.log(movieTitle);
    console.log(movieHomepage);
    console.log(movieOverview);
    console.log(moviePoster);
    console.log(movieDuration);
    // object.original_title;
    // document.createElement('h2') = movieTitle;
  })
}

movieApp.init = () => {
  // calling the getMovieData upon initialization 
  getMovieData();
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