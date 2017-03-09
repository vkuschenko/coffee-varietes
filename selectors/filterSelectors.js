import {createSelector} from 'reselect';
import {chain, isEmpty} from 'lodash';

const entities = state => state.coffeeVarieties.entities;
const filters = state => state.filters;

export const filterByRegion = (entities, region) => {
  if (isEmpty(region)) {
    return entities;
  } else {
    return entities.filter((entity) => entity.region === region);
  }
};

export const filterByCountry = (entities, country) => {
  if (isEmpty(country)) {
    return entities;
  } else {
    return entities.filter((entity) => entity.land === country);
  }
};

export const filterByVariety = (entities, variety) => {
  if (isEmpty(variety)) {
    return entities;
  } else {
    return entities.filter((entity) => entity.variety.indexOf(variety) >= 0);
  }
};

export const regionsSelector = createSelector(
  [entities, filters],
  (entities, filters) => {
    const {region, country, variety} = filters;
    const filteredItems = filterByRegion(filterByCountry(filterByVariety(entities, variety), country), region);
    return chain(filteredItems)
      .uniqBy('region')
      .map(item => item.region)
      .value();
  }
);

export const countriesSelector = createSelector(
  [entities, filters],
  (entities, filters) => {
    const {region, country, variety} = filters;
    const filteredItems = filterByRegion(filterByCountry(filterByVariety(entities, variety), country), region);
    return chain(filteredItems)
      .map(item => item.land)
      .value();
  }
);

export const flagsSelector = createSelector(
  [entities, filters],
  (entities, filters) => {
    const {region, country, variety} = filters;
    const filteredItems = filterByRegion(filterByCountry(filterByVariety(entities, variety), country), region);
    return chain(filteredItems)
      .map(item => item.img)
      .value();
  }
);

export const varietiesSelector = createSelector(
  [entities, filters],
  (entities, filters) => {
    const {region, country, variety} = filters;
    const filteredItems = filterByRegion(filterByCountry(filterByVariety(entities, variety), country), region);
    return chain(filteredItems)
      .flatMap(item => item.variety)
      .uniq()
      .value()
  }
);
