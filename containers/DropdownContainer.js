'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import Dropdown from '../components/Dropdown';
import {
  SET_FILTER_REGION,
  SET_FILTER_COUNTRY,
  SET_FILTER_VARIETY,
  setFilter
} from '../actions/filters';
import {
  regionsSelector,
  countriesSelector,
  varietiesSelector
} from '../selectors/filterSelectors';

class DropdownContainer extends Component {
  render() {
    const label = this.props.type === SET_FILTER_REGION
      ? 'Region'
      : this.props.type === SET_FILTER_COUNTRY
        ? 'Country'
        : this.props.type === SET_FILTER_VARIETY
          ? 'Variety'
          : '';

    return (
      <Dropdown
        label={label}
        options={this.props.entities}
        onDropdownChange={this.props.handleDropdownChange}
      />
    );
  }
}

DropdownContainer.propTypes = {
  type: PropTypes.oneOf([
    SET_FILTER_REGION,
    SET_FILTER_COUNTRY,
    SET_FILTER_VARIETY
  ]).isRequired,
  entities: PropTypes.array,
  handleDropdownChange: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    entities: ownProps.type === SET_FILTER_REGION
      ? regionsSelector(state)
      : ownProps.type === SET_FILTER_COUNTRY
        ? countriesSelector(state)
        : ownProps.type === SET_FILTER_VARIETY
          ? varietiesSelector(state)
          : []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleDropdownChange: (event) => dispatch(setFilter(ownProps.type, event.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);