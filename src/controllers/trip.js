//import CardComponent from '../components/card.js';
//import CardEditComponent from '../components/card-edit.js';

//import TripDaysComponent from '../components/trip-days.js';

import {render, remove, RenderPosition} from '../utils/render.js';

import CardController from './card.js';

const renderCards = (cardListElement, cards, onDataChange, onViewChange) => {
  return cards.map((card) => {
    const cardController = new CardController(cardListElement, onDataChange, onViewChange);

    cardController.render(card);

    return cardController;
  });
};

/*const renderCard = (cardListElement, card) => {
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
};*/

export default class TripController {
  constructor(container) {
    this._container = container;

    this._cards = [];
    //this._showedCardControllers = [];
    //this._cardsComponent = new TripDaysComponent();
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
  }

  render(cards) {
    this._cards = cards;

    const container = this._container.getElement();

    //render(container, this._cardsComponent, RenderPosition.BEFOREEND);

    //const cardListElement = this._cardsComponent.getElement();
    const newCards = renderCards(container, this._cards, this._onDataChange, this._onViewChange);
  }

  _onDataChange(cardController, oldData, newData) {
    /*const index = this._cards.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._cards = [].concat(this._cards.slice(0, index), newData, this._cards.slice(index + 1));

    cardController.render(this._cards[index]);*/
  }

  _onViewChange() {
    //this._showedCardControllers.forEach((it) => it.setDefaultView());
  }
}

/*export default class TripController {
  constructor(container) {
    this._container = container;
  }

  render(cards) {
    const container = this._container.getElement();

    cards.forEach((card) => renderCard(container, card));
  }
}*/
