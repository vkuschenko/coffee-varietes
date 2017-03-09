'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import FlagsList from '../components/FlagsList';
import {flagsSelector} from '../selectors/filterSelectors';

class FlagsListContainer extends Component {
  render() {
    return (
      <FlagsList
        flags={this.props.flags}
      />
    );
  }
}

FlagsListContainer.propTypes = {
  flags: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    flags: flagsSelector(state)
  };
};

export default connect(mapStateToProps)(FlagsListContainer);