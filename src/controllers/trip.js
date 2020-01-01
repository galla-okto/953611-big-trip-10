import PointController from './point.js';
import TripDaysComponent from '../components/trip-days.js';
import { render, RenderPosition } from '../utils/render.js';

const renderPoints = (pointListElement, points, onDataChange, onViewChange) => {
  return points.map((point) => {
    const pointController = new PointController(pointListElement, onDataChange, onViewChange);

    pointController.render(point);

    return pointController;
  });
};

export default class TripController {
  constructor(container, pointsModel) {
    this._container = container;
    this._pointsModel = pointsModel;

    this._showedPointsControllers = [];
    this._pointsComponent = new TripDaysComponent();

    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._pointsModel.setFilterChangeHandler(this._onFilterChange);
  }

  render() {
    const container = this._container.getElement();
    const points = this._pointsModel.getPoints();

    render(container, this._pointsComponent, RenderPosition.BEFOREEND);

    this._renderPoints(points);
  }

  _removePoints() {
    const pointListElement = this._pointsComponent.getElement();

    pointListElement.innerHTML = ``;
    this._showedPointsControllers = [];
  }

  _renderPoints(points) {
    const pointListElement = this._pointsComponent.getElement();

    const newPoints = renderPoints(pointListElement, points, this._onDataChange, this._onViewChange);
    this._showedPointsControllers = this._showedPointsControllers.concat(newPoints);
  }

  _onDataChange(pointController, oldData, newData) {
    const isSuccess = this._pointsModel.updatePoint(oldData.id, newData);

    if (isSuccess) {
      pointController.render(newData);
    }
  }

  _onViewChange() {
    this._showedPointsControllers.forEach((it) => it.setDefaultView());
  }

  _onFilterChange() {
    this._removePoints();
    this._renderPoints(this._pointsModel.getPoints());
  }
}
