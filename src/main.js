import InfoTripComponent from './components/info-trip.js';
import FilterController from './controllers/filter.js';
import SiteMenuComponent from './components/site-menu.js';
import TripDaysComponent from './components/trip-days.js';

import {createTripSortTemplate} from './components/trip-sort.js';

import {calculatePriceTrip} from './components/price-trip.js';
import {createPriceTripTemplate} from './components/price-trip.js';

import PointsModel from './models/points.js';

import {generateCards} from './mock/card.js';
import {generateSiteMenu} from './mock/site-menu.js';
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

siteHeaderElement.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, () => {
  tripController.createPoint();
});

const cards = generateCards(CARD_COUNT);
const pointsModel = new PointsModel();
pointsModel.setPoints(cards);

const infoTrip = generateInfoTrip(cards);
render(siteTripInfoElement, new InfoTripComponent(infoTrip), RenderPosition.AFTERBEGIN);

const priceTrip = calculatePriceTrip(cards);
renderHtml(siteTripInfoElement, createPriceTripTemplate(priceTrip), RenderPosition.BEFOREEND);

const filterController = new FilterController(siteTripControlsElement, pointsModel);
filterController.render();

const siteMenu = generateSiteMenu();
render(siteTripControlsElement, new SiteMenuComponent(siteMenu), RenderPosition.AFTERBEGIN);

const sitePageMainElement = document.querySelector(`.page-main`);
const siteTripEventsElement = sitePageMainElement.querySelector(`.trip-events`);

renderHtml(siteTripEventsElement, createTripSortTemplate(), RenderPosition.AFTERBEGIN);

const tripDaysComponent = new TripDaysComponent;
render(siteTripEventsElement, tripDaysComponent, RenderPosition.BEFOREEND);

const tripController = new TripController(tripDaysComponent, pointsModel);

tripController.render();
