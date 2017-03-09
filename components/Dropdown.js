'use strict';

import React, {PropTypes} from 'react';
import '../css/dropdown.css';

function Dropdown(props) {
  return (
    <div className="dropdown-container">
      <label>{props.label}</label>
      <select className="dropdown" onChange={props.onDropdownChange}>
        <option key="empty"></option>
        {props.options.map(opt => {
          return <option key={opt}>{opt}</option>;
        })}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  onDropdownChange: PropTypes.func,
  options: PropTypes.array
};

export default Dropdown;