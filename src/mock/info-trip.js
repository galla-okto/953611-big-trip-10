import {formatDate} from '../utils/common.js';

const generateInfoTrip = (cards) => {
  const firstPoint = cards[0];
  const lastPoint = cards[cards.length - 1];

  const nameTripTowns = cards.length > 2
    ? firstPoint.town + ` &mdash; ... &mdash; ` + lastPoint.town
    : firstPoint.town + ` &mdash; ` + lastPoint.town;

  const nameTripDates = formatDate(firstPoint.date) + ` &nbsp;&mdash;&nbsp; ` + formatDate(lastPoint.date);

  const nameTrip = {nameTripTowns, nameTripDates};

  return nameTrip;
};

export {generateInfoTrip};
