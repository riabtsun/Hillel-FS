const createElement = (tagName, attributes = {}) => {
  const element = document.createElement(tagName);
  Object.assign(element, attributes);
  return element;
};

const createSearchInput = () =>
  createElement('input', {
    type: 'text',
    placeholder: 'Search movie by name',
    class: 'search',
    id: 'search',
  });

const createResultsContainer = () =>
  createElement('div', {
    className: 'result',
  });

let createShowMoreButton = () => {
  createElement('button', {
    textContent: 'Show more',
    style: 'display: none',
    className: 'show-more-btn',
  });
};

const createHeading = () => {
  createElement('h1', {
    textContent: 'MOVIE DATABASE',
    className: 'heading',
  });
};

export {
  createSearchInput,
  createResultsContainer,
  createShowMoreButton,
  createHeading,
};
