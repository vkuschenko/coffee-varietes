'use strict';

import {expect} from 'chai';
import {
  SET_FILTER_REGION,
  SET_FILTER_COUNTRY,
  SET_FILTER_VARIETY,
  setFilter
} from '../../actions/filters';

describe('test -> actions -> dropdowns', () => {

  describe('setFilter:', () => {

    it('Should create correct action for "region" filter type', () => {
      const actualAction = setFilter(SET_FILTER_REGION, 'test');
      expect(actualAction).to.deep.equal({type: SET_FILTER_REGION, payload: 'test'});
    });

    it('Should create correct action for "country" filter type', () => {
      const actualAction = setFilter(SET_FILTER_COUNTRY, 'test');
      expect(actualAction).to.deep.equal({type: SET_FILTER_COUNTRY, payload: 'test'});
    });

    it('Should create correct action for "variety" filter type', () => {
      const actualAction = setFilter(SET_FILTER_VARIETY, 'test');
      expect(actualAction).to.deep.equal({type: SET_FILTER_VARIETY, payload: 'test'});
    });

  });

});