import React from 'react';
import PropTypes from 'prop-types';

import Radio from './Radio';

import './style.scss';

const Filter = ({
  className,
  filterSortOrientationValue,
  filterSortDisponibilityValue,
  filterSortOrientationOption,
  filterSortDisponibilityOption,
  ChangeFilterSortValue,
  filteredata,
}) => (
  <div className={`filterStudent ${className}`}>
    <div className="filterStudent__title">
      <h2 className="filterStudent__title--name">Filtres</h2>
      <p>{filteredata} Etudiants</p>
    </div>
    <p className="filterStudent__orientation">Spécialité:</p>
    <div className="filterStudent__choice">
      <Radio
        isLabel
        label=""
        name="orientation"
        className="filterStudent__choice--indispo"
        options={filterSortOrientationOption}
        ChangeFilterSortValue={ChangeFilterSortValue}
        defaultValue={filterSortOrientationValue}
      />
    </div>
    <div className="filterStudent__choice--line">
      <p className="filterStudent__dispo">Disponibilité</p>
      <div className="filterStudent__choice">
        <Radio
          isLabel
          label=""
          name="disponibility"
          className="filterStudent__choice--indispo"
          options={filterSortDisponibilityOption}
          ChangeFilterSortValue={ChangeFilterSortValue}
          defaultValue={filterSortDisponibilityValue}
        />
      </div>
    </div>
  </div>
);

Filter.propTypes = {
  className: PropTypes.string,
  filterSortOrientationValue: PropTypes.string.isRequired,
  filterSortDisponibilityValue: PropTypes.string.isRequired,
  filterSortOrientationOption: PropTypes.array.isRequired,
  filterSortDisponibilityOption: PropTypes.array.isRequired,
  ChangeFilterSortValue: PropTypes.func.isRequired,
  filteredata: PropTypes.number.isRequired,
};

Filter.defaultProps = {
  className: PropTypes.string,
};

export default Filter;
