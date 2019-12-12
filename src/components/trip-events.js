import AbstractComponent from './abstract-component.js';

const createTripEventsTemplate = () => {
  return (
    `<section class="trip-events"></section>`
  );
};


export default class TripEvents extends AbstractComponent {
  getTemplate() {
    return createTripEventsTemplate();
  }
}
