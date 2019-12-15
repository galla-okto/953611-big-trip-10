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
  }

  render(cards) {
    const container = this._container.getElement();

    cards.forEach((card) => renderCard(container, card));
  }
}
