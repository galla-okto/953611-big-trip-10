import {createEventHeaderTemplate} from './event-header.js';
import {createOffersTemplate} from './offers.js';
import {createDestinationTemplate} from './destination.js';

import AbstractComponent from './abstract-component.js';

const createCardEditTemplate = (card) => {
  return (`<div>
  <form class="trip-events__item event event--edit" action="#" method="post">
  ${createEventHeaderTemplate(card)}
  <section class="event__details">
  ${createOffersTemplate(card)}
  ${createDestinationTemplate(card)}
  </section>
  </form>
  </div>`);
};

export default class CardEdit extends AbstractComponent {
  constructor(card) {
    super();

    this._card = card;
  }

  getTemplate() {
    return createCardEditTemplate(this._card);
  }
}
