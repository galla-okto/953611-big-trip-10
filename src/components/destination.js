const createPhotoMarkup = (photo) => {
  return (`
    <img class="event__photo" src="${photo}" alt="Event photo">
    `
  );
};

export const createDestinationTemplate = (card) => {
  const photos = card.photos;
  const description = card.description;

  const photosMakeup = photos.map((it) => createPhotoMarkup(it)).join(`\n`);

  return (`
    <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${photosMakeup}
            </img>
          </div>
        </div>
    </section>
  `);
};
