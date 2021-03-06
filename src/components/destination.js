import {generateDescription} from '../mock/card.js';

const createPhotoMarkup = (photo) => {
  return (`<img class="event__photo" src="${photo}" alt="Event photo">`);
};

const createListOfPhotosMarkup = (photos) => {
  return photos.map(createPhotoMarkup).join(`\n`);
};

export const createDestinationTemplate = (card, destination) => {
  const {photos} = card;

  const photosMakeup = createListOfPhotosMarkup(photos);
  const description = generateDescription(destination);

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
