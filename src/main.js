import InfoTripComponent from './components/info-trip.js';
import FilterComponent from './components/filter.js';
import SiteMenuComponent from './components/site-menu.js';
import CardComponent from './components/card.js';
import CardEditComponent from './components/card-edit.js';

import {calculatePriceTrip} from './components/price-trip.js';
import {createPriceTripTemplate} from './components/price-trip.js';
import {createTripSortTemplate} from './components/trip-sort.js';

import {generateCards} from './mock/card.js';
import {generateSiteMenu} from './mock/site-menu.js';
import {generateFilters} from './mock/filter.js';
import {generateInfoTrip} from './mock/info-trip.js';
import {render, RenderPosition} from './utils.js';

const CARD_COUNT = 5;

const renderHtml = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.trip-main`);
const siteTripInfoElement = siteHeaderElement.querySelector(`.trip-info`);
const siteTripControlsElement = siteHeaderElement.querySelector(`.trip-controls`);

const cards = generateCards(CARD_COUNT);

const infoTrip = generateInfoTrip(cards);
render(siteTripInfoElement, new InfoTripComponent(infoTrip).getElement(), RenderPosition.AFTERBEGIN);

const priceTrip = calculatePriceTrip(cards);
renderHtml(siteTripInfoElement, createPriceTripTemplate(priceTrip), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(siteTripControlsElement, new FilterComponent(filters).getElement(), RenderPosition.AFTERBEGIN);

const siteMenu = generateSiteMenu();
render(siteTripControlsElement, new SiteMenuComponent(siteMenu).getElement(), RenderPosition.AFTERBEGIN);

const sitePageMainElement = document.querySelector(`.page-main`);
const siteTripEventsElement = sitePageMainElement.querySelector(`.trip-events`);

renderHtml(siteTripEventsElement, createTripSortTemplate(), RenderPosition.BEFOREEND);

const CardListElement = siteTripEventsElement.querySelector(`.trip-days`);

const renderCard = (card) => {
  const cardComponent = new CardComponent(card);
  const cardEditComponent = new CardEditComponent(card);

  const editButton = cardComponent.getElement().querySelector(`.event__rollup-btn`);

  editButton.addEventListener(`click`, () => {
    CardListElement.replaceChild(cardEditComponent.getElement(), cardComponent.getElement());
  });

  const editForm = cardEditComponent.getElement().querySelector(`form`);

  editForm.addEventListener(`submit`, () => {
    CardListElement.replaceChild(cardComponent.getElement(), cardEditComponent.getElement());
  });

  render(CardListElement, cardComponent.getElement(), RenderPosition.BEFOREEND);
};

cards.forEach((card) => renderCard(card));
