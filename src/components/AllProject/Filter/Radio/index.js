/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Radio = ({
  className,
  isLabel,
  label,
  name,
  options,
  ChangeFilterSortValue,
  defaultValue,
}) => {
  const handleChangeValue = (evt) => {
    ChangeFilterSortValue(evt.target.value);
  };
  return (
    <div className={`radioGroup ${className}`}>
      {isLabel && <p className="radioGroup__label-dark">{label}</p>}
      {options.map((currentOption) => (
        <div key={currentOption.id} className="radioGroup__option">
          <input
            type="radio"
            className="radioGroup__option--input"
            value={currentOption.value}
            onChange={handleChangeValue}
            id={currentOption.id}
            name={name}
            checked={defaultValue === currentOption.value}
          />
          <label htmlFor={currentOption.id} className="radioGroup__option--label">{currentOption.name}</label>
        </div>
      ))}
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  isLabel: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  ChangeFilterSortValue: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  className: '',
  label: 'Label',
  isLabel: false,
};

export default Radio;
