import AbstractComponent from './abstract-component.js';

const createInfoTripTemplate = (infoTrip) => {
  const {nameTripTowns, nameTripDates} = infoTrip;

  return (`<div class="trip-info__main">
    <h1 class="trip-info__title">${nameTripTowns}</h1>

    <p class="trip-info__dates">${nameTripDates}</p>
  </div>`
  );
};

export default class InfoTrip extends AbstractComponent {
  constructor(infoTrip) {
    super();

    this._infoTrip = infoTrip;
  }

  getTemplate() {
    return createInfoTripTemplate(this._infoTrip);
  }
}
