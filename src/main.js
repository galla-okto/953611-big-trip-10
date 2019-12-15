import InfoTripComponent from './components/info-trip.js';
import FilterComponent from './components/filter.js';
import SiteMenuComponent from './components/site-menu.js';
import TripComponent from './components/trip-events.js';

import {createTripSortTemplate} from './components/trip-sort.js';

import {calculatePriceTrip} from './components/price-trip.js';
import {createPriceTripTemplate} from './components/price-trip.js';

import {generateCards} from './mock/card.js';
import {generateSiteMenu} from './mock/site-menu.js';
import {generateFilters} from './mock/filter.js';
import {generateInfoTrip} from './mock/info-trip.js';
import {render, RenderPosition} from './utils/render.js';

import TripController from './controllers/trip.js';

const CARD_COUNT = 5;

const renderHtml = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.trip-main`);
const siteTripInfoElement = siteHeaderElement.querySelector(`.trip-info`);
const siteTripControlsElement = siteHeaderElement.querySelector(`.trip-controls`);

const cards = generateCards(CARD_COUNT);

const infoTrip = generateInfoTrip(cards);
render(siteTripInfoElement, new InfoTripComponent(infoTrip), RenderPosition.AFTERBEGIN);

const priceTrip = calculatePriceTrip(cards);
renderHtml(siteTripInfoElement, createPriceTripTemplate(priceTrip), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(siteTripControlsElement, new FilterComponent(filters), RenderPosition.AFTERBEGIN);

const siteMenu = generateSiteMenu();
render(siteTripControlsElement, new SiteMenuComponent(siteMenu), RenderPosition.AFTERBEGIN);

const sitePageMainElement = document.querySelector(`.page-main`);
const siteTripEventsElement = sitePageMainElement.querySelector(`.trip-events`);

renderHtml(siteTripEventsElement, createTripSortTemplate(), RenderPosition.AFTERBEGIN);

const tripComponent = new TripComponent;
render(siteTripEventsElement, tripComponent, RenderPosition.BEFOREEND);

const tripController = new TripController(tripComponent);

tripController.render(cards);
