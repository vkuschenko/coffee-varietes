'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import api from './middlewares/apiMiddleware';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(
    applyMiddleware(api)
  )
);

export default store;