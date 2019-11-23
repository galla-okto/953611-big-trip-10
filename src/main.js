import {createFilterTemplate} from './components/filter.js';
import {createFormEditTemplate} from './components/form-edit.js';
import {createFormAddTemplate} from './components/form-add.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createCardTemplate} from './components/card.js';
import {createInfoTripTemplate} from './components/info-trip.js';

const CARD_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.trip-main`);
const siteTripInfoElement = siteHeaderElement.querySelector(`.trip-info`);
const siteTripControlsElement = siteHeaderElement.querySelector(`.trip-controls`);

render(siteTripInfoElement, createInfoTripTemplate(), `afterbegin`);

render(siteTripControlsElement, createFilterTemplate(), `afterbegin`);
render(siteTripControlsElement, createSiteMenuTemplate(), `afterbegin`);

const sitePageMainElement = document.querySelector(`.page-main`);
const siteTripEventsElement = sitePageMainElement.querySelector(`.trip-events`);

render(siteTripEventsElement, createFormAddTemplate(), `beforeend`);
render(siteTripEventsElement, createFormEditTemplate(), `beforeend`);

const getCardsTemplate = () => new Array(CARD_COUNT).fill(``).map(createCardTemplate).join(``);

render(siteTripEventsElement, getCardsTemplate(), `beforeend`);
