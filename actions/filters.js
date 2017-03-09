'use strict';

export const SET_FILTER_REGION = 'SET_FILTER_REGION';
export const SET_FILTER_COUNTRY = 'SET_FILTER_COUNTRY';
export const SET_FILTER_VARIETY = 'SET_FILTER_VARIETY';

export function setFilter(filterType, payload) {
  return {
    type: filterType,
    payload
  };
}