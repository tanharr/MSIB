import '../component/smartPhone-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const smartPhoneListElement = document.querySelector('list-hp');

  const onButtonSearchClicked = () => {
    DataSource.searchSmartPhone(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
};

  const renderResult = results => {
    smartPhoneListElement.smartPhone = results;
  };

  const fallbackResult = message => {
    smartPhoneListElement.renderError(message);
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};

export default main;