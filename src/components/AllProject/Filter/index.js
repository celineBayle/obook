import React from 'react';
import PropTypes from 'prop-types';

import Radio from './Radio';

import './style.scss';

const Filter = ({
  className, options, filtered, ChangeFilterSortValue, pronjectNumber,
}) => (
  <div className={`filterProject ${className}`}>
    <div className="filterProject__title">
      <h2 className="filterProject__title--name">Filtres</h2>
      <p>{pronjectNumber} projets</p>
    </div>
    <div className="filterProject__choice--line">
      <p className="filterProject__dispo">Trier:</p>
      <div className="filterProject__choice">
        <Radio
          isLabel
          label=""
          name="trier"
          className="filterProject__choice--trier"
          options={options}
          ChangeFilterSortValue={ChangeFilterSortValue}
          defaultValue={filtered}
        />
      </div>
    </div>
  </div>
);

Filter.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  filtered: PropTypes.string.isRequired,
  ChangeFilterSortValue: PropTypes.func.isRequired,
  pronjectNumber: PropTypes.number.isRequired,
};

Filter.defaultProps = {
  className: PropTypes.string,
};

export default Filter;
