'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import {spy} from 'sinon';

export const createStore = (state) => ({
  default: spy(),
  subscribe: spy(),
  dispatch: spy(),
  getState: () => ({ ...state })
});

export const mountWithState = (element = {}, state = {}, props = {}) => {
  const store = createStore(state);
  return mount(
    <Provider store={store}>
      {React.cloneElement(
        element,
        props
      )}
    </Provider>
  );
};