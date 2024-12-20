const Months = {
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

const msecInMinute = 1000;
const secInHour = 3600;
const hourInDay = 24;

export const getFormattedRangeDate = (startDay, startMonth, endDay, endMonth) => `${String(startDay).padStart(2, '0')} ${Months[startMonth]} -
          ${String(endDay).padStart(2, '0')} ${Months[endMonth]}`;


export const getFormattedDateMMMDD = (startDay, startMonth) => `${Months[startMonth]} ${String(startDay).padStart(2, '0')}`;

export const getFormattedTimeHHmm = (hours, minutes) => `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

export const getDayCountFromMs = (startDate, endDate) => Math.floor((endDate - startDate) / msecInMinute / secInHour / hourInDay);
