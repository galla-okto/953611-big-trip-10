import CardComponent from '../components/card.js';
import CardEditComponent from '../components/card-edit.js';

import {render, replace, RenderPosition} from '../utils/render.js';

const renderCard = (cardListElement, card) => {
  const onEscKeyDown = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const replaceEditToCard = () => {
    replace(cardComponent, cardEditComponent);
  };

  const replaceCardToEdit = () => {
    replace(cardEditComponent, cardComponent);
  };

  const cardComponent = new CardComponent(card);

  cardComponent.setEditButtonClickHandler(() => {
    replaceCardToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const cardEditComponent = new CardEditComponent(card);

  cardEditComponent.setSubmitHandler(replaceEditToCard);

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
