const createOfferTemplate = (element) => {
  return `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${element.type}-1" type="checkbox" name="event-offer-${element.type}" ${element.checked ? `checked` : ``}>
        <label class="event__offer-label" for="event-offer-${element.type}-1">
            <span class="event__offer-title">${element.title}</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${element.price}</span>
        </label>
    </div>\n
  `;
};

const createOptionMarkup = (options) => {
  let optionMakeup = ``;

  options.forEach(function (element) {
    optionMakeup = optionMakeup + createOfferTemplate(element);
  });

  return optionMakeup;
};

export const createOffersTemplate = (card) => {
  const {option} = card;

  const optionMakeup = createOptionMarkup(option);

  return (`
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">

        ${optionMakeup}

        </div>
      </section>`
  );
};
