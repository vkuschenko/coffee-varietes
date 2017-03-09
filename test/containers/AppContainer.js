'use strict';

import React from 'react';
import {expect} from 'chai';
import {mountWithState} from '../testHelpers';
import App from '../../components/App';
import AppContainer from '../../containers/AppContainer';

describe('test -> containers -> AppContainer', () => {

  const state = {
    coffeeVarieties: {
      isFetching: false,
      entities: []
    },
    filters: {
      region: '',
      country: '',
      variety: '',
    }
  };

  it('Should render correctly', () => {
    const wrapper = mountWithState(<AppContainer/>, state);
    expect(wrapper.find(App)).to.have.length(1)
  });

});