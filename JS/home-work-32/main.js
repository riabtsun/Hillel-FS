import { createMovieItem } from './movie.js';
import {
  createSearchInput,
  createResultsContainer,
  createShowMoreButton,
  createHeading,
} from './dom.js';

const url = 'http://www.omdbapi.com/?';
const apiKey = '3fab1bd8';

// const heading =
document.body.appendChild(createHeading());

const searchInput = createSearchInput();
document.body.appendChild(searchInput);

const resultsDiv = createResultsContainer();
document.body.appendChild(resultsDiv);

const showMoreBtn = createShowMoreButton();
document.body.appendChild(showMoreBtn);

// const getData = async (url) => {
//   try {
//     await fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Запит не вдався: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         createMovieItem(data);
//       });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// searchInput.addEventListener('input', (e) => {
//   getData(`${url}s=${query}&apikey=${apiKey}&page=${currentPage}`);
// });

searchInput.addEventListener('input', debounce(searchMovies, 500));

let currentPage = 1;
let totalResults = 0;

async function searchMovies() {
  currentPage = 1;
  const query = searchInput.value;
  if (query.length < 3) {
    resultsDiv.innerHTML = ``;
    return;
  }

  const response = await fetch(
    `${url}s=${query}&apikey=${apiKey}&page=${currentPage}`
  );
  const data = await response.json();

  if (data.Response === 'True') {
    totalResults = parseInt(data.totalResults);
    resultsDiv.innerHTML = ``;
    const movies = data.Search.slice(0, 10);
    movies.forEach((movie) => {
      const movieItem = createMovieItem(movie);
      resultsDiv.appendChild(movieItem);
    });
    showMoreBtn.style.display = totalResults > 10 ? 'block' : 'none';
  } else {
    resultsDiv.innerHTML = `No results Found! Please try again`;
    showMoreBtn.style.display = 'none';
  }
}

showMoreBtn.addEventListener('click', async () => {
  currentPage++;
  const query = searchInput.value;

  const response = await fetch(
    `${url}s=${query}&apikey=${apiKey}&page=${currentPage}`
  );
  const data = await response.json();

  const movies = data.Search.slice(0, 10);
  movies.forEach((movie) => {
    const movieDiv = createMovieItem(movie);
    resultsDiv.appendChild(movieDiv);
  });

  if (currentPage * 10 >= totalResults) {
    showMoreBtn.style.display = 'none';
  }
});

function debounce(func, timeout) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(func, timeout);
  };
}
