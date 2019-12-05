import {formatDate} from '../utils.js';

export const createTripDaysOpenTemplate = () => {
  return `<ul class="trip-days">`;
};

export const createTripDayOpenTemplate = (day) => {
  const date = `${formatDate(day)}`;

  return (`
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">1</span>
        <time class="day__date" datetime="2019-03-18"> ${date}</time>
      </div>

      <ul class="trip-events__list">`
  );
};

export const createTripDayCloseTemplate = () => {
  return `</ul> </li>`;
};

export const createTripDaysCloseTemplate = () => {
  return `</ul>`;
};
