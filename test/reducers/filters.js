'use strict';

import {expect} from 'chai';
import {
  SET_FILTER_REGION,
  SET_FILTER_COUNTRY,
  SET_FILTER_VARIETY,
  setFilter
} from '../../actions/filters';
import reducer, {initialState} from '../../redux/reducers/filters';

describe('test -> reducers -> filters', () => {

  it('Should return initialState on start', () => {
    expect(reducer()).to.deep.equal(initialState);
  });

  it('Should return correct state on SET_FILTER_REGION action', () => {
    const action = setFilter(SET_FILTER_REGION, 'some_region');
    const outputState = reducer(initialState, action);
    expect(outputState).to.deep.equal({...initialState, ...{region: action.payload}});
  });

  it('Should return correct state on SET_FILTER_COUNTRY action', () => {
    const action = setFilter(SET_FILTER_COUNTRY, 'some_country');
    const outputState = reducer(initialState, action);
    expect(outputState).to.deep.equal({...initialState, ...{country: action.payload}});
  });

  it('Should return correct state on SET_FILTER_VARIETY action', () => {
    const action = setFilter(SET_FILTER_VARIETY, 'some_variety');
    const outputState = reducer(initialState, action);
    expect(outputState).to.deep.equal({...initialState, ...{variety: action.payload}});
  });

  it('Should return current state on unknown action', () => {
    const outputState = reducer(initialState, {type: 'SOME_UNKNOWN_ACTION_TYPE'});
    expect(outputState).to.deep.equal(initialState);
  });

});