'use strict';

import { combineReducers } from 'redux';
import coffeeVarieties from './api';
import filters from './filters';

export default combineReducers({
  coffeeVarieties,
  filters
});