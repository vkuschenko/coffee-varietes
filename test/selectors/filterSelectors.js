'use strict';

import {expect} from 'chai';
import {
  filterByRegion,
  filterByCountry,
  filterByVariety
} from '../../selectors/filterSelectors';

describe('test -> selectors -> filterSelectors', () => {

  describe('filterByRegion:', () => {
    const entities = [
      {region: 'Africa'},
      {region: 'South America'},
      {region: 'Asia'},
      {region: 'Central America'},
      {region: 'South America'},
    ];

    it('Selector should return correct list count for filter "Africa"', () => {
      expect(filterByRegion(entities, 'Africa')).to.have.lengthOf(1);
    });

    it('Selector should return correct list count for filter "South America"', () => {
      expect(filterByRegion(entities, 'South America')).to.have.lengthOf(2);
    });

    it('Selector should return correct list count for filter "no_such_region"', () => {
      expect(filterByRegion(entities, 'no_such_region')).to.have.lengthOf(0);
    });

    it('Selector should return correct list count for empty filter', () => {
      expect(filterByRegion(entities, '')).to.have.lengthOf(5);
    });
  });

  describe('filterByCountry:', () => {
    const entities = [
      {land: 'Mexico'},
      {land: 'Tanzania'},
      {land: 'Colombia'},
      {land: 'Tanzania'},
      {land: 'Vietnam'},
    ];

    it('Selector should return correct list count for filter "Mexico"', () => {
      expect(filterByCountry(entities, 'Mexico')).to.have.lengthOf(1);
    });

    it('Selector should return correct list count for filter "Tanzania"', () => {
      expect(filterByCountry(entities, 'Tanzania')).to.have.lengthOf(2);
    });

    it('Selector should return correct list count for filter "no_such_country"', () => {
      expect(filterByCountry(entities, 'no_such_country')).to.have.lengthOf(0);
    });

    it('Selector should return correct list count for empty filter', () => {
      expect(filterByCountry(entities, '')).to.have.lengthOf(5);
    });

  });

  describe('filterByVariety:', () => {
    const entities = [
      {variety: ['Bourbon', 'Castillo', 'Caturra', 'Gesha', 'Maragogype', 'Typica']},
      {variety: ['Bourbon', 'SL-28', 'SL-34']},
      {variety: ['Bourbon', 'Robusta', 'Typica']},
      {variety: ['Bourbon', 'Catimor', 'Robusta']},
      {variety: ['Batian', 'SL-28', 'SL-34', 'Riuri 11']},
    ];

    it('Selector should return correct list count for filter "Batian"', () => {
      expect(filterByVariety(entities, 'Batian')).to.have.lengthOf(1);
    });

    it('Selector should return correct list count for filter "Bourbon"', () => {
      expect(filterByVariety(entities, 'Bourbon')).to.have.lengthOf(4);
    });

    it('Selector should return correct list count for filter "Robusta"', () => {
      expect(filterByVariety(entities, 'Robusta')).to.have.lengthOf(2);
    });



    it('Selector should return correct list count for empty filter', () => {
      expect(filterByVariety(entities, '')).to.have.lengthOf(5);
    });

  });

});