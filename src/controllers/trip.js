import PointController from './point.js';

const renderCards = (cardListElement, cards, onDataChange, onViewChange) => {
  return cards.map((card) => {
    const pointController = new PointController(cardListElement, onDataChange, onViewChange);

    pointController.render(card);

    return pointController;
  });
};

export default class TripController {
  constructor(container, pointsModel) {
    this._container = container;
    this._pointsModel = pointsModel;

    this._showedCardsControllers = [];
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
  }

  render() {
    const container = this._container.getElement();
    const points = this._pointsModel.getPoints();

    const newCards = renderCards(container, points, this._onDataChange, this._onViewChange);
    this._showedCardsControllers = this._showedCardsControllers.concat(newCards);
  }

  _onDataChange(pointController, oldData, newData) {
    //const index = this._cards.findIndex((it) => it === oldData);
    const isSuccess = this._pointsModel.updatePoint(oldData.id, newData);

    if (isSuccess) {
      pointController.render(newData);
    }
  }

  _onViewChange() {
    this._showedCardsControllers.forEach((it) => it.setDefaultView());
  }
}
