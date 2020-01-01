import {isFuture, isPast} from './common.js';
import {FilterType} from '../const.js';

export const getPoints = (points) => {
  return points;
};

export const getFuturePoints = (points, date) => {
  return points.filter((point) => {
    const dueDate = point.date;

    if (!dueDate) {
      return false;
    }

    return isFuture(dueDate, date);
  });
};

export const getPastPoints = (points, date) => {
  return points.filter((point) => {
    const dueDate = point.date;

    if (!dueDate) {
      return false;
    }

    return isPast(dueDate, date);
  });
};

export const getPointsByFilter = (points, filterType) => {
  const nowDate = new Date();

  switch (filterType) {
    case FilterType.EVERYTHING:
      return getPoints(points);
    case FilterType.FUTURE:
      return getFuturePoints(points, nowDate);
    case FilterType.PAST:
      return getPastPoints(points, nowDate);
  }

  return points;
};
