import CardComponent from '../components/card.js';
import CardEditComponent from '../components/card-edit.js';

import {render, RenderPosition} from '../utils/render.js';

const renderCard = (cardListElement, card) => {
  const cardComponent = new CardComponent(card);
  const cardEditComponent = new CardEditComponent(card);

  cardComponent.setEditButtonClickHandler(() => {
    cardListElement.replaceChild(cardEditComponent.getElement(), cardComponent.getElement());
  });

  cardEditComponent.setSubmitHandler(() => {
    cardListElement.replaceChild(cardComponent.getElement(), cardEditComponent.getElement());
  });

  render(cardListElement, cardComponent, RenderPosition.BEFOREEND);
};

export default class TripController {
  constructor(container) {
    this._container = container;
  };

  render(cards) {
    const sitePageMainElement = document.querySelector(`.page-main`);
    const siteTripEventsElement = sitePageMainElement.querySelector(`.trip-events`);
    const cardListElement = siteTripEventsElement.querySelector(`.trip-days`);

    cards.forEach((card) => renderCard(cardListElement, card));
  }
}
