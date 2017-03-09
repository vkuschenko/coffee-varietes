'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {fetchCoffeeVarieties} from '../actions/api';
import App from '../components/App';

class AppContainer extends Component {
  componentDidMount() {
    this.props.loadCoffeeVarietiesData();
  }

  render() {
    return (
      <App isLoading={this.props.isLoading}/>
    );
  }
}

AppContainer.propTypes = {
  loadCoffeeVarietiesData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.coffeeVarieties.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCoffeeVarietiesData: () => dispatch(fetchCoffeeVarieties())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);