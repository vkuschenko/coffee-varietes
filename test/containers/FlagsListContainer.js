'use strict';

import React from 'react';
import {expect} from 'chai';
import {mountWithState} from '../testHelpers';
import FlagsList from '../../components/FlagsList';
import FlagsListContainer from '../../containers/FlagsListContainer';

describe('test -> containers -> FlagsListContainer', () => {

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
    const wrapper = mountWithState(<FlagsListContainer/>, state);
    expect(wrapper.find(FlagsList)).to.have.length(1)
  });

});