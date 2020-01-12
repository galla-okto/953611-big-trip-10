import PointController, {Mode as PointControllerMode, EmptyPoint} from './point.js';
import TripDaysComponent from '../components/trip-days.js';
import {render, RenderPosition} from '../utils/render.js';

const SHOWING_POINTS_COUNT_ON_START = 5;

const renderPoints = (pointListElement, points, onDataChange, onViewChange) => {
  return points.map((point) => {
    const pointController = new PointController(pointListElement, onDataChange, onViewChange);

    pointController.render(point, PointControllerMode.DEFAULT);

    return pointController;
  });
};

export default class TripController {
  constructor(container, pointsModel) {
    this._container = container;
    this._pointsModel = pointsModel;

    this._showedPointsControllers = [];
    this._showingPointsCount = SHOWING_POINTS_COUNT_ON_START;
    this._pointsComponent = new TripDaysComponent();
    this._creatingPoint = null;

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

  createPoint() {
    if (this._creatingPoint) {
      return;
    }

    const pointListElement = this._pointsComponent.getElement();
    this._creatingPoint = new PointController(pointListElement, this._onDataChange, this._onViewChange);
    this._creatingPoint.render(EmptyPoint, PointControllerMode.ADDING);
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

  _updatePoints(count) {
    this._removePoints();
    this._renderPoints(this._pointsModel.getPoints().slice(0, count));
  }

  _onDataChange(pointController, oldData, newData) {
    if (oldData === EmptyPoint) {
      this._creatingPoint = null;

      if (newData === null) {
        pointController.destroy();
        this._updatePoints(this._showingPointsCount);
      } else {
        this._pointsModel.addPoint(newData);
        pointController.render(newData, PointControllerMode.DEFAULT);

        const destroyedPoint = this._showedPointControllers.pop();
        destroyedPoint.destroy();
        this._showedPointControllers = [].concat(pointController, this._showedPointControllers);
        this._showingPointsCount = this._showedPointControllers.length;
      }
    } else if (newData === null) {
      this._pointsModel.removePoint(oldData.id);
      this._updatePoints(this._showingPointsCount);
    } else {
      const isSuccess = this._pointsModel.updatePoint(oldData.id, newData);

      if (isSuccess) {
        pointController.render(newData);
      }
    }
  }

  _onViewChange() {
    this._showedPointsControllers.forEach((it) => it.setDefaultView());
  }

  _onFilterChange() {
    this._updatePoints(SHOWING_POINTS_COUNT_ON_START);
  }
}
