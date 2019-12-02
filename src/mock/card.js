import {Towns} from '../const.js';

const Types = [
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

const Descriptions = [
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

const Titles = {
  luggage: `Add luggage`,
  comfort: `Switch to comfort class`,
  meal: `Add meal`,
  seats: `Choose seats`,
  train: `Travel by train`
};

const Prices = [
  `+10 €`,
  `+150 €`,
  `+2 €`,
  `+9 €`
];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

const getRandomDate = () => {
  const targetDate = new Date();

  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 5);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const getRandomTime = () => {
  const targetDate = new Date();

  return targetDate.getHours() + ` ` + targetDate.getMinutes();
};

const generateOption = () => {
  let options = [];

  typesOffer.forEach(function (element) {
    options.push(Object.assign(
        {checked: getRandomIntegerNumber(0, 2)},
        {type: element},
        {title: Titles[element]},
        {price: getRandomArrayItem(Prices)}
    ));
  });

  return options;
};

const generateDescription = () => {
  return Descriptions[getRandomIntegerNumber(0, Descriptions.length - 1)];
};

const generatePhoto = () => {
  return `http://picsum.photos/300/150?r=${Math.random()}`;
};

const getPhotos = () => {
  return new Array(getRandomIntegerNumber(1, 5)).fill(``).map(generatePhoto);
};

const generateCard = () => {

  return {
    type: getRandomArrayItem(Types),
    town: getRandomArrayItem(Towns),
    photos: getPhotos(),
    description: new Array(getRandomIntegerNumber(1, 3)).fill(``).map(generateDescription),
    date: getRandomDate(),
    timeIn: getRandomTime(),
    timeOut: getRandomTime(),
    price: getRandomIntegerNumber(100, 1000),
    option: generateOption()
  };
};

const generateCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateCard);
};

export {generateCard, generateCards};
