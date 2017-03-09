'use strict';

import {expect} from 'chai';
import {
  FETCH_COFFEE_VARIETIES_REQUEST,
  FETCH_COFFEE_VARIETIES_SUCCESS,
  FETCH_COFFEE_VARIETIES_FAIL
} from '../../actions/api';
import reducer, {initialState} from '../../redux/reducers/api';

describe('test -> reducers -> api', () => {

  const notFetchingState = initialState;
  const fetchingState = {...initialState, ...{isFetching: true}};

  it('Should return initialState on start', () => {
    expect(reducer()).to.deep.equal(initialState);
  });

  it('Should return correct state on FETCH_COFFEE_VARIETIES_REQUEST action', () => {
    const outputState = reducer(notFetchingState, {type: FETCH_COFFEE_VARIETIES_REQUEST});
    expect(outputState).to.deep.equal({isFetching: true, entities: []});
  });

  it('Should return correct state on FETCH_COFFEE_VARIETIES_SUCCESS action', () => {
    const outputState = reducer(fetchingState, {type: FETCH_COFFEE_VARIETIES_SUCCESS, data: [1, 2, 3]});
    expect(outputState).to.deep.equal({isFetching: false, entities: [1, 2, 3]});
  });

  it('Should return correct state on FETCH_COFFEE_VARIETIES_FAIL action', () => {
    const outputState = reducer(notFetchingState, {type: FETCH_COFFEE_VARIETIES_FAIL});
    expect(outputState).to.deep.equal({isFetching: false, entities: []});
  });

  it('Should return current state on unknown action', () => {
    const outputState = reducer(notFetchingState, {type: 'SOME_UNKNOWN_ACTION_TYPE'});
    expect(outputState).to.deep.equal(notFetchingState);
  });

});