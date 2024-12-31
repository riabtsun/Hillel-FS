const url = 'http://www.omdbapi.com/';
const apiKey = '&apikey=3fab1bd8';
main = document.querySelector('#main');
const searchInput = document.querySelector('#search');
const getData = async (url) => {
  try {
    await fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Запит не вдався: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        renderMovies(data);
      });
  } catch (error) {
    console.error(error.message);
  }
};

const renderMovies = (data) => {
  main.innerHTML = '';
  const { Title, Poster } = data;
  const movieEl = document.createElement('div');
  movieEl.classList.add('movie');
  movieEl.innerHTML = `
      <img src='${Poster}' alt='${Title}'>
      <div class="movie-info">
        <h3 class='movie-title'>${Title}</h3>
      </div>
      `;
  console.log(Title);
  main.appendChild(movieEl);
  // data.forEach((movie) => {
  //
  // });
};

searchInput.addEventListener('input', (e) => {
  getData(url + `?t=${e.target.value}` + apiKey);
});
