const movieApp = {};
movieApp.url = `http://api.themoviedb.org/3/discover/movie/`
movieApp.apikey = `a0e32a4a0c009553ac6020779811cc03`

movieApp.getMovieData = (genreChoice = 878, duration = 400) => {
  const apiUrl = new URL(movieApp.url)
  apiUrl.search = new URLSearchParams( {
    api_key: movieApp.apikey,
    with_genres: genreChoice,
    "with_runtime.lte": duration
  })
  fetch(apiUrl)
  .then((results) => {
    return results.json()
  })
  .then((jsonResults) => {
    movieApp.displayMovie(jsonResults);
  })
}

movieApp.displayMovie = (jsonResults) => {
  const randomInteger = Math.floor(Math.random() * jsonResults.results.length);

  const movieTitle = jsonResults.results[randomInteger].original_title;
  const movieOverview = jsonResults.results[randomInteger].overview;
  const moviePoster = jsonResults.results[randomInteger].poster_path;
  const posterUrl = `http://image.tmdb.org/t/p/original`
  
  const firstPref = document.querySelector('#first-choice');
  firstPref.innerHTML = '';

  const h3Element = document.createElement('h3');
  h3Element.innerHTML = `${movieTitle}`

  const pElement = document.createElement('p');
  pElement.innerHTML = `${movieOverview}`

  const imgElement = document.createElement('img');
  imgElement.src = posterUrl + moviePoster;
  imgElement.alt = `Poster for ${movieTitle}`
  imgElement.innerHTML = ``;
    
  firstPref.appendChild(h3Element);
  firstPref.appendChild(pElement);
  firstPref.appendChild(imgElement);    
}

movieApp.setUpEventListeners = function(){
  document.querySelector('#form').addEventListener('submit', function(event){
    event.preventDefault();
    // on submit targeting genre and duration within the form
    movieApp.getMovieData(genre.value, form.duration.value);
    document.querySelector(`footer`).style.display="block";
    document.querySelector(`.dynamic-content`).style.display="block";
  })
}

movieApp.init = () => {
  movieApp.setUpEventListeners();
};

movieApp.init();