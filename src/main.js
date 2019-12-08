import InfoTripComponent from './components/info-trip.js';
import FilterComponent from './components/filter.js';
import SiteMenuComponent from './components/site-menu.js';
import CardComponent from './components/card.js';
import CardEditComponent from './components/card-edit.js';

import {calculatePriceTrip} from './components/price-trip.js';
import {createPriceTripTemplate} from './components/price-trip.js';
import {createTripSortTemplate} from './components/trip-sort.js';

import {createTripDaysOpenTemplate} from './components/trip-day.js';
import {createTripDaysCloseTemplate} from './components/trip-day.js';
import {createTripDayOpenTemplate} from './components/trip-day.js';
import {createTripDayCloseTemplate} from './components/trip-day.js';

import {generateCards} from './mock/card.js';
import {generateSiteMenu} from './mock/site-menu.js';
import {generateFilters} from './mock/filter.js';
import {generateInfoTrip} from './mock/info-trip.js';
import {render, RenderPosition} from './utils.js';

const CARD_COUNT = 5;

const render2 = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderCard = (card) => {
  const cardComponent = new CardComponent(card);
  const cardEditComponent = new CardEditComponent(card);

  const editButton = cardComponent.getElement().querySelector(`.event__rollup-btn`);

  editButton.addEventListener(`click`, () => {
    CardListElement.replaceChild(cardEditComponent.getElement(), cardComponent.getElement());
  });

  const editForm = CardEditComponent.getElement().querySelector(`form`);

  editForm.addEventListener(`submit`, () => {
    CardListElement.replaceChild(cardComponent.getElement(), cardEditComponent.getElement());
  });

  render(CardListElement, cardComponent.getElement(), RenderPosition.BEFOREEND);
};

const siteHeaderElement = document.querySelector(`.trip-main`);
const siteTripInfoElement = siteHeaderElement.querySelector(`.trip-info`);
const siteTripControlsElement = siteHeaderElement.querySelector(`.trip-controls`);

const cards = generateCards(CARD_COUNT);

const infoTrip = generateInfoTrip(cards);
render(siteTripInfoElement, new InfoTripComponent(infoTrip).getElement(), RenderPosition.AFTERBEGIN);

const priceTrip = calculatePriceTrip(cards);
render2(siteTripInfoElement, createPriceTripTemplate(priceTrip), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(siteTripControlsElement, new FilterComponent(filters).getElement(), RenderPosition.AFTERBEGIN);

const siteMenu = generateSiteMenu();
render(siteTripControlsElement, new SiteMenuComponent(siteMenu).getElement(), RenderPosition.AFTERBEGIN);

const sitePageMainElement = document.querySelector(`.page-main`);
const siteTripEventsElement = sitePageMainElement.querySelector(`.trip-events`);

const CardListElement = siteTripEventsElement.querySelector(`.trip-days`);

render2(siteTripEventsElement, createTripSortTemplate(), RenderPosition.BEFOREEND);

cards.forEach((card) => renderCard(card));

//render(CardListElement, new CardComponent(card).getElement(), RenderPosition.BEFOREEND));

/*const days = [];

for (let index = 1; index < cards.length; index++) {
  days.push(cards[index].date);
};

days.sort();*/

//render2(siteTripEventsElement, createTripDaysOpenTemplate(), `beforeend`);

//days.forEach((day) => {
  //render2(siteTripEventsElement, createTripDayOpenTemplate(day), `beforeend`);

  //for (let index = 1; index < cards.length; index++) {
    //if (day === cards[index].date) {

      //renderCard(cards[index]);

      //render(siteTripEventsElement, new Card(cards[index]).getElement(), RenderPosition.BEFOREEND);

      //render(siteTripEventsElement, new CardEdit(cards[index]).getElement(), RenderPosition.BEFOREEND);
    //}
  //};

  //render2(siteTripEventsElement, createTripDayCloseTemplate(), `beforeend`);
//});

//render2(siteTripEventsElement, createTripDaysCloseTemplate(), `beforeend`);

