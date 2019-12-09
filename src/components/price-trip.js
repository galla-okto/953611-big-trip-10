export const calculatePriceTrip = (cards) => {
  let priceTrip = 0;

  cards.forEach((element) => {
    priceTrip = priceTrip + element.price;
  });

  return priceTrip;
};

export const createPriceTripTemplate = (priceTrip) => {

  return (`<p class="trip-info__cost">
       Total: &euro;&nbsp;<span class="trip-info__cost-value">${priceTrip}</span>
    </p>`
  );
};
