import {monthNames} from './const.js';

export const formatDate = (date) => {

  return `${monthNames[date.getMonth()]} ${date.getDate()}`;

};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

export const getRandomDate = () => {
  const targetDate = new Date();

  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 5);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

export const getRandomTime = () => {
  const targetDate = new Date();

  return targetDate.getHours() + ` ` + targetDate.getMinutes();
};

