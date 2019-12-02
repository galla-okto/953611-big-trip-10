import {createEventHeaderTemplate} from './event-header.js';
import {createOffersTemplate} from './offers.js';
import {createDestinationTemplate} from './destination.js';

export const createFormAddTemplate = (card) => {
  return (`
    <form class="trip-events__item  event  event--edit" action="#" method="post">`

    + createEventHeaderTemplate(card) +

    `<section class="event__details">`

    + createOffersTemplate(card) + ``

    + createDestinationTemplate(card) +

    `</section>
  </form>`
  );
};
