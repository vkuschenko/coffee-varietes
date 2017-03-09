'use strict';

import React from 'react';
import {expect} from 'chai';
import {mountWithState} from '../testHelpers';
import Dropdown from '../../components/Dropdown';
import DropdownContainer from '../../containers/DropdownContainer';
import {SET_FILTER_REGION} from '../../actions/filters';

describe('test -> containers -> DropdownContainer', () => {

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

  const props = {
    type: SET_FILTER_REGION
  };

  it('Should render correctly', () => {
    const wrapper = mountWithState(<DropdownContainer/>, state, props);
    expect(wrapper.find(Dropdown)).to.have.length(1)
  });

});