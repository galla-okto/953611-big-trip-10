import {createEventHeaderTemplate} from './event-header.js';
import {createOffersTemplate} from './offers.js';
import {createDestinationTemplate} from './destination.js';

import AbstractSmartComponent from './abstract-smart-component.js';

const createCardEditTemplate = (card, options = {}) => {
  const {activeEventType, activeDestination} = options;

  return (`<div>
  <form class="event event--edit" action="#" method="post">
  ${createEventHeaderTemplate(card, activeEventType)}
  <section class="event__details">
  ${createOffersTemplate(card, activeEventType)}
  ${createDestinationTemplate(card, activeDestination)}
  </section>
  </form>
  </div>`);
};

export default class CardEdit extends AbstractSmartComponent {
  constructor(card) {
    super();

    this._card = card;
    this._activeEventType = card.type;
    this._activeDestination = card.destination;

    this._subscribeOnEvents();
  }

  getTemplate() {
    return createCardEditTemplate(this._card, {
      activeEventType: this._activeEventType,
      activeDestination: this._activeDestination
    });
  }

  recoveryListeners() {
    this._subscribeOnEvents();
  }

  rerender() {
    super.rerender();
  }

  setSubmitHandler(handler) {
    this.getElement().querySelector(`form`).addEventListener(`submit`, handler);
  }

  setFavoritesButtonClickHandler(handler) {
    this.getElement().querySelector(`.event__favorite-checkbox`).addEventListener(`change`, handler);
  }

  _subscribeOnEvents() {
    const element = this.getElement();

    element.querySelector(`.event__type-list`).addEventListener(`click`, (evt) => {
      this._activeEventType = evt.target.control.value;

      this.rerender();
    });

    element.querySelector(`.event__input--destination`).addEventListener(`change`, (evt) => {
      this._activeDestination = evt.target.value;

      this.rerender();
    });
  }
}
