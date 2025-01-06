const header = document.querySelector('.header');
const createElement = (tagName, attributes = {}) => {
  const element = document.createElement(tagName);
  Object.assign(element, attributes);
  return element;
};

const createSearchInput = () => {
  return createElement('input', {
    type: 'text',
    placeholder: 'Search movie by name',
    className: 'search',
    id: 'search',
  });
};
const createHeading = () => {
  return createElement('h1', {
    textContent: 'MOVIE DATABASE',
    className: 'heading',
  });
};

const createResultsContainer = () =>
  createElement('div', {
    className: 'result',
  });

let createShowMoreButton = () => {
  return createElement('button', {
    textContent: 'Show more',
    style: 'display: none',
    className: 'show-more-btn',
  });
};

export {
  createSearchInput,
  createResultsContainer,
  createShowMoreButton,
  createHeading,
  header,
};
