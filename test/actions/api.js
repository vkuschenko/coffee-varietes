'use strict';

import {expect} from 'chai';
import {
  FETCH_COFFEE_VARIETIES_REQUEST,
  FETCH_COFFEE_VARIETIES_SUCCESS,
  FETCH_COFFEE_VARIETIES_FAIL,
  fetchCoffeeVarieties
} from '../../actions/api';

describe('test -> actions -> api', () => {

  describe('fetchCoffeeVarieties:', () => {

    it('Should create correct action', () => {
      const actualAction = fetchCoffeeVarieties();
      expect(actualAction.type).to.be.defined;
      expect(actualAction.type).to.have.lengthOf(3);
      expect(actualAction.type).to.include(FETCH_COFFEE_VARIETIES_REQUEST);
      expect(actualAction.type).to.include(FETCH_COFFEE_VARIETIES_SUCCESS);
      expect(actualAction.type).to.include(FETCH_COFFEE_VARIETIES_FAIL);
    });

  });

});