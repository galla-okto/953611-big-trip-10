export const createInfoTripTemplate = (infoTrip) => {
  const {nameTripTowns, nameTripDates} = infoTrip;

  return (
    `<div class="trip-info__main">
    <h1 class="trip-info__title">${nameTripTowns}</h1>

    <p class="trip-info__dates">${nameTripDates}</p>
  </div>`
  );
};
