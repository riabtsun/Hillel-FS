import { url, apiKey } from './main.js';
const createMovieItem = async (data) => {
  const { Title, Poster, Year, Type, imdbID } = data;
  const details = await movieInfo(
    `${url}?&apikey=${apiKey}&i=${imdbID}&plot=short`
  );

  const movieEl = document.createElement('div');
  movieEl.classList.add('movie');

  movieEl.innerHTML = `
      <img class='movie-img' src='${
        Poster !== 'N/A' ? Poster : 'assets/img/No_Image_Available.jpg'
      }' alt='${Title}'>
      <div class="movie-info">
      <a href='https://www.imdb.com/title/${imdbID}'>
        <h2 class='movie-title' title="${Title}">${Title}</h2>
      </a>
        <p class='movie-year'>Year: ${Year}</p>
        <p class='movie-type'>Type: ${Type}</p>
        <div class="overview">
           <a href='https://www.imdb.com/title/${imdbID}' target='_blank' >
              <h3 class='movie-title' title="${Title}">${Title}</h3>
          </a>
         <p>${details.Plot}</p> 
      </div>
      </div>
      `;

  return movieEl;
};

async function movieInfo(url) {
  return await fetch(url).then((response) => response.json());
}

export { createMovieItem };
