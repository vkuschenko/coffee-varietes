'use strict';

import {
  FETCH_COFFEE_VARIETIES_REQUEST,
  FETCH_COFFEE_VARIETIES_SUCCESS,
  FETCH_COFFEE_VARIETIES_FAIL
} from '../../actions/api';

export const initialState = {
  isFetching: false,
  entities: []
};

export default function reducer(state = initialState, action) {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case FETCH_COFFEE_VARIETIES_REQUEST:
      return {
        ...state,
        ...{isFetching: true}
      };
    case FETCH_COFFEE_VARIETIES_SUCCESS:
      return {
        ...state,
        ...{
          entities: action.data,
          isFetching: false
        }
      };
    case FETCH_COFFEE_VARIETIES_FAIL:
      return {
        ...state,
        ...{isFetching: false}
      };
    default:
      return state;
  }
}
