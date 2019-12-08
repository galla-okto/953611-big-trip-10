import {createElement} from '../utils.js';

const createInfoTripTemplate = (infoTrip) => {
  const {nameTripTowns, nameTripDates} = infoTrip;

  return (`<div class="trip-info__main">
    <h1 class="trip-info__title">${nameTripTowns}</h1>

    <p class="trip-info__dates">${nameTripDates}</p>
  </div>`
  );
};

export default class InfoTrip {
  constructor(infoTrip) {
    this._infoTrip = infoTrip;
    this._element = null;
  }

  getTemplate() {
    return createInfoTripTemplate(this._infoTrip);
  };

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  };

  removeElement() {
    this._element = null;
  }
};
