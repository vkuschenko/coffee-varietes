'use strict';

import React from 'react';
import Header from  './Header';
import Loader from  './Loader';
import DropdownContainer from  '../containers/DropdownContainer';
import FlagsListContainer from  '../containers/FlagsListContainer';
import {
  SET_FILTER_REGION,
  SET_FILTER_COUNTRY,
  SET_FILTER_VARIETY
} from '../actions/filters';
import '../css/app.css';

function App(props) {
  return (
    <div className="app">
      <Header/>
      <div className="dropdowns-wrapper">
        <DropdownContainer type={SET_FILTER_REGION}/>
        <DropdownContainer type={SET_FILTER_COUNTRY}/>
        <DropdownContainer type={SET_FILTER_VARIETY}/>
      </div>
      <FlagsListContainer />
      {props.isLoading && <Loader />}
    </div>
  );
}

export default App;