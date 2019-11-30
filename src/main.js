import {createFilterTemplate} from './components/filter.js';
import {createFormAddTemplate} from './components/form-add.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createInfoTripTemplate} from './components/info-trip.js';
import {createTripDaysTemplate} from './components/trip-days.js';

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

render(siteTripEventsElement, createTripDaysTemplate(), `beforeend`);
