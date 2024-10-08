export const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


export const getRandomArrayItem = (items) => {
  const arrayItems = Object.keys(items);
  const item = Math.floor(Math.random() * arrayItems.length);

  return arrayItems[item];
};


export const getFormattedDate = (rawDate) => {
  const months = {
    1: 'JAN',
    2: 'FEB',
    3: 'MAR',
    4: 'APR',
    5: 'MAY',
    6: 'JUN',
    7: 'JUL',
    8: 'AUG',
    9: 'SEP',
    10: 'OCT',
    11: 'NOV',
    12: 'DEC',
  };

  const monthNum = +rawDate.split('-')[1];
  const day = rawDate.split('-')[2];

  return `${months[monthNum]} ${day}`;
};
