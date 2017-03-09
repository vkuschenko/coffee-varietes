'use strict';

import React from 'react';
import { render } from 'react-dom';
import './css/main.css';

import store from './redux/store';
import Root from './Root';

render(
  <Root store={store} />,
  document.getElementById('root')
);