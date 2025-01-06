import { url, apiKey } from './main.js';
const createMovieItem = (data) => {
  console.log(data);
  const { Title, Poster, Year, Type, imdbID } = data;
  const details = movieInfo(`${url}?&apikey=${apiKey}&i=${imdbID}&plot=short`);
  console.log('details: ', details);
  const movieEl = document.createElement('div');
  movieEl.classList.add('movie');

  movieEl.innerHTML = `
      <img src='${Poster ? Poster : 'N/A'}' alt='${Title}'>
      <div class="movie-info">
      <a href='https://www.imdb.com/title/${imdbID}'>
        <h2 class='movie-title' title="${Title}">${Title}</h2>
      </a>
        <p class='movie-year'>${Year}</p>
        <p class='movie-type'>${Type}</p>
        <div class="overview">
          <h3>Overview</h3>
          ${details.Plot}
      </div>
      </div>
      `;

  return movieEl;
};

async function movieInfo(url) {
  const details = await fetch(url).then((response) => response.json());
  return details;
}

export { createMovieItem };
