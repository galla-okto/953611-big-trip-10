import { createCardTemplate } from './card.js';

const CARD_COUNT = 3;

const getCardsTemplate = () => new Array(CARD_COUNT).fill(``).map(createCardTemplate).join(``);

export const createDayTemplate = () => {
  return (`
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">1</span>
        <time class="day__date" datetime="2019-03-18">MAR 18</time>
      </div>

      <ul class="trip-events__list">`

    + getCardsTemplate() +

    `</ul>
      </li>`
  );
};
