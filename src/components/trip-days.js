import { createDayTemplate } from './day.js';

const DAYS_COUNT = 3;

const getDaysTemplate = () => new Array(DAYS_COUNT).fill(``).map(createDayTemplate).join(``);

export const createTripDaysTemplate = () => {
  return (
    `<ul class="trip-days">`

    + getDaysTemplate() +

    `</ul>`
  );
};
