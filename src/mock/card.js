import {towns} from '../const.js';
import {getRandomArrayItem} from '../utils/common.js';
import {getRandomIntegerNumber} from '../utils/common.js';
import {getRandomDate} from '../utils/common.js';
import {getRandomTime} from '../utils/common.js';

const MAX_NUMBER_PHOTOS = 5;
const MAX_SIZE_DESCRIPTION = 3;
const MIN_PRICE = 100;
const MAX_PRICE = 1000;

const types = [
  `bus`,
  `check-in`,
  `drive`,
  `flight`,
  `restaurant`,
  `ship`,
  `sightseeing`,
  `taxi`,
  `train`,
  `transport`,
  `trip`
];

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const typesOffer = [
  `luggage`,
  `comfort`,
  `meal`,
  `seats`,
  `train`
];

const titleMap = {
  luggage: `Add luggage`,
  comfort: `Switch to comfort class`,
  meal: `Add meal`,
  seats: `Choose seats`,
  train: `Travel by train`
};

const prices = [
  `+10 €`,
  `+150 €`,
  `+2 €`,
  `+9 €`
];

const generateOption = () => {
  let options = [];

  typesOffer.forEach(function (element) {
    options.push(Object.assign(
        {checked: getRandomIntegerNumber(0, 2)},
        {type: element},
        {title: titleMap[element]},
        {price: getRandomArrayItem(prices)}
    ));
  });

  return options;
};

const generateDescription = () => {
  return descriptions[getRandomIntegerNumber(0, descriptions.length - 1)];
};

const generatePhoto = () => {
  return `http://picsum.photos/300/150?r=${Math.random()}`;
};

const getPhotos = () => {
  return new Array(getRandomIntegerNumber(1, MAX_NUMBER_PHOTOS)).fill(``).map(generatePhoto);
};

const generateCard = () => {

  return {
    id: String(new Date() + Math.random()),
    type: getRandomArrayItem(types),
    town: getRandomArrayItem(towns),
    photos: getPhotos(),
    description: new Array(getRandomIntegerNumber(1, MAX_SIZE_DESCRIPTION)).fill(``).map(generateDescription),
    date: getRandomDate(),
    timeIn: getRandomTime(),
    timeOut: getRandomTime(),
    price: getRandomIntegerNumber(MIN_PRICE, MAX_PRICE),
    option: generateOption(),
    isFavorite: true
  };
};

const generateCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateCard);
};

export {generateCard, generateCards, generateOption, generateDescription};
