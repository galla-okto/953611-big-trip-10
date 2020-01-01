import PointController from './card.js';

const renderCards = (cardListElement, cards, onDataChange, onViewChange) => {
  return cards.map((card) => {
    const pointController = new PointController(cardListElement, onDataChange, onViewChange);

    pointController.render(card);

    return pointController;
  });
};

export default class TripController {
  constructor(container) {
    this._container = container;

    this._cards = [];
    this._showedCardsControllers = [];
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
  }

  render(cards) {
    this._cards = cards;

    const container = this._container.getElement();

    const newCards = renderCards(container, this._cards, this._onDataChange, this._onViewChange);
    this._showedCardsControllers = this._showedCardsControllers.concat(newCards);
  }

  _onDataChange(pointController, oldData, newData) {
    const index = this._cards.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._cards = [].concat(this._cards.slice(0, index), newData, this._cards.slice(index + 1));

    pointController.render(this._cards[index]);
  }

  _onViewChange() {
    this._showedCardsControllers.forEach((it) => it.setDefaultView());
  }
}
