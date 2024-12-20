import dayjs from 'dayjs';


const getEventLength = (dateFrom, dateTo) => {
  const startDateTime = dayjs(dateFrom);
  const endDateTime = dayjs(dateTo);

  return endDateTime - startDateTime;
};

const getEventDate = (dateFrom) => dayjs(dateFrom);
export const sortByPrice = (aPoint, bPoint) => bPoint.basePrice - aPoint.basePrice;
export const sortByDate = (aPoint, bPoint) => getEventDate(aPoint.dateFrom) - getEventDate(bPoint.dateFrom);
export const sortByTime = (aPoint, bPoint) => getEventLength(bPoint.dateFrom, bPoint.dateTo) - getEventLength(aPoint.dateFrom, aPoint.dateTo);

export const SortTypes = {
  DAY: 'Day',
  EVENT: 'Event',
  TIME: 'Time',
  PRICE: 'Price',
  OFFERS: 'Offers'
};
export const SortMethods = {
  Day: sortByDate,
  Time: sortByTime,
  Price: sortByPrice
};
export const DEFAULT_SORT_TYPE = SortTypes.DAY;
export const DEFAULT_SORT_METHOD = SortMethods.Day;

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const UpdateType = {
  HEADER: 'HEADER',
  ROW: 'ROW',
  ALL: 'ALL',
};


export const FilterType = {
  EVERYTHING: 'Everything',
  FUTURE: 'Future',
  PRESENT: 'Present',
  PAST: 'Past'
};
export const DEFAULT_FILTER_TYPE = FilterType.EVERYTHING;


export const filterEmptyMessage = {
  EVERYTHING: 'There are no everything events now',
  FUTURE: 'There are no future events now',
  PRESENT: 'There are no present events now',
  PAST: 'There are no past events now'
};

export const ActionType = {
  APPEND: 'append',
  EDIT: 'edit',
  DELETE: 'delete'
};

export const PointTypes = {
  TAXI: 'Taxi',
  BUS: 'Bus',
  TRAIN: 'Train',
  SHIP: 'Ship',
  DRIVE: 'Drive',
  FLIGHT: 'Flight',
  CHECKIN: 'Check-in',
  SIGHTSEENG: 'Sightseeing',
  RESTAURANT: 'Restaurant'
};

export const StateType = {
  LOADING_VIEW: 'Loading view',
  EMPTY_VIEW: 'Empty view',
  EMPTY_FILTERED_VIEW: 'Empty filtered view',
  LIST_VIEW: 'List view',
  NEW_POINT_VIEW: 'New point view',
  UPDATE_POINT_VIEW: 'Update point view',
  NO_DATA: 'No data',
  FAILED_LOAD_DATA: 'Failed load data',
  SUCCESS: 'Success'
};

export const StateTypeMessage = {
  LOADING: 'Loading...',
  NO_DATA: 'Click New Event to create your first point',
  FAILED_LOAD_DATA: 'Failed to load latest route information',
  SUCCESS: 'Success'
};


export const EventType = {
  ADD_POINT: 'Add point',
  UPDATE_POINT: 'Update point',
  DELETE_POINT: 'Delete point',
  FAVORITE_POINT: 'Favorite point',
  ROW_ROLLUP: 'Row rollup'
};
