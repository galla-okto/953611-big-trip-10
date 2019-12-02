import {MonthNames} from './const.js';

export const formatDate = (date) => {

  return `${MonthNames[date.getMonth()]} ${date.getDate()}`;

};
