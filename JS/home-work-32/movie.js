let main = document.querySelector('#main');

const createMovieItem = (data) => {
  main.innerHTML = '';
  const { Title, Poster, Year, Type } = data;
  const movieEl = document.createElement('div');
  movieEl.classList.add('movie');
  movieEl.innerHTML = `
      <img src='${Poster ? Poster : 'N/A'}' alt='${Title}'>
      <div class="movie-info">
        <h2 class='movie-title' title="${Title}">${Title}</h2>
        <span class='movie-year'>${Year}</span>
        <span class='movie-type'>${Type}</span>
      </div>
      `;

  return movieEl;
};

export { createMovieItem };
