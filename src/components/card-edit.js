import {createEventHeaderTemplate} from './event-header.js';
import {createOffersTemplate} from './offers.js';
import {createDestinationTemplate} from './destination.js';

import {createElement} from '../utils.js';

const createCardEditTemplate = (card) => {
  return (`<form class="trip-events__item event event--edit" action="#" method="post">`

    + createEventHeaderTemplate(card) +

    `<section class="event__details">`

    + createOffersTemplate(card) + ``

    + createDestinationTemplate(card) +

    `</section>
  </form>`
  );
};

export default class CardEdit {
  constructor(card) {
    this._card = card;
    this._element = null;
  }

  getTemplate() {
    return createCardEditTemplate(this._card);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
