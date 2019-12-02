import {createFilterTemplate} from './components/filter.js';
import {createTripSortTemplate} from './components/trip-sort.js';
import {createFormAddTemplate} from './components/form-add.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createInfoTripTemplate} from './components/info-trip.js';
import {createTripDaysOpenTemplate} from './components/trip-day.js';
import {createTripDaysCloseTemplate} from './components/trip-day.js';
import {createTripDayOpenTemplate} from './components/trip-day.js';
import {createTripDayCloseTemplate} from './components/trip-day.js';
import {createCardTemplate} from './components/card.js';
import {calculatePriceTrip} from './components/price-trip.js';
import {createPriceTripTemplate} from './components/price-trip.js';
import {generateCards} from './mock/card.js';
import {generateSiteMenu} from './mock/site-menu.js';
import {generateFilters} from './mock/filter.js';
import {generateInfoTrip} from './mock/info-trip.js';

const CARD_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.trip-main`);
const siteTripInfoElement = siteHeaderElement.querySelector(`.trip-info`);
const siteTripControlsElement = siteHeaderElement.querySelector(`.trip-controls`);

const cards = generateCards(CARD_COUNT);

const infoTrip = generateInfoTrip(cards);
render(siteTripInfoElement, createInfoTripTemplate(infoTrip), `afterbegin`);

const priceTrip = calculatePriceTrip(cards);
render(siteTripInfoElement, createPriceTripTemplate(priceTrip), `beforeend`);

const filters = generateFilters();
render(siteTripControlsElement, createFilterTemplate(filters), `afterbegin`);

const siteMenu = generateSiteMenu();
render(siteTripControlsElement, createSiteMenuTemplate(siteMenu), `afterbegin`);

const sitePageMainElement = document.querySelector(`.page-main`);
const siteTripEventsElement = sitePageMainElement.querySelector(`.trip-events`);

render(siteTripEventsElement, createTripSortTemplate(), `beforeend`);
render(siteTripEventsElement, createFormAddTemplate(cards[0]), `beforeend`);

const days = [];

for (let index = 1; index < cards.length; index++) {
  days.push(cards[index].date);
};

days.sort();

render(siteTripEventsElement, createTripDaysOpenTemplate(), `beforeend`);

days.forEach((day) => {
  render(siteTripEventsElement, createTripDayOpenTemplate(day), `beforeend`);

  for (let index = 1; index < cards.length; index++) {
    if (day === cards[index].date) {
      render(siteTripEventsElement, createCardTemplate(cards[index]), `beforeend`);
    }
  };

  render(siteTripEventsElement, createTripDayCloseTemplate(), `beforeend`);
});

render(siteTripEventsElement, createTripDaysCloseTemplate(), `beforeend`);
