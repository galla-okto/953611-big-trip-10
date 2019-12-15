import AbstractComponent from './abstract-component.js';

const createTripEventsTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class TripEvents extends AbstractComponent {
  getTemplate() {
    return createTripEventsTemplate();
  }
}
