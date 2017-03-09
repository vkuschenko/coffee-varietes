'use strict';

import React, {PropTypes} from 'react';
import '../css/flags-list.css';

function FlagsList (props) {
  return (
    <div className="flag-list">
      {props.flags.map((flag, i) => {
        return <img className="flag" key={i} src={flag}/>;
      })}
    </div>
  );
}

FlagsList.propTypes = {
  flags: PropTypes.array
};

export default FlagsList;