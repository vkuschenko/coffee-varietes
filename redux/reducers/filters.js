'use strict';

import {
  SET_FILTER_REGION,
  SET_FILTER_COUNTRY,
  SET_FILTER_VARIETY
} from '../../actions/filters';

export const initialState = {
  region: '',
  country: '',
  variety: '',
};

export default function reducer(state = initialState, action) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case SET_FILTER_REGION:
      return {
        ...state,
        ...{region: action.payload}
      };
    case SET_FILTER_COUNTRY:
      return {
        ...state,
        ...{country: action.payload}
      };
    case SET_FILTER_VARIETY:
      return {
        ...state,
        ...{variety: action.payload}
      };
    default:
      return state;
  }
}
