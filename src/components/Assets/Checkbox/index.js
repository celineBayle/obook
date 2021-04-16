/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

import './style.scss';

const Checkbox = ({
  className,
  isLabel,
  label,
  name,
  options,
}) => {
  const handleChangeValue = (evt) => {
    console.log('changement de valeur');
    console.log(evt.target.value);
  };
  return (
    <div className={`checkboxGroup ${className}`}>
      {isLabel && <p className="checkboxGroup__label-dark">{label}</p>}
      {options.map((currentOption) => (
        <div key={currentOption.id} className="checkboxGroup__option">
          <input
            type="checkbox"
            className="checkboxGroup__option--input"
            value={currentOption.name}
            onChange={handleChangeValue}
            id={currentOption.name}
            name={name}
          />
          <label htmlFor={currentOption.name} className="checkboxGroup__option--label">{currentOption.name}</label>
        </div>
      ))}
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  isLabel: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Checkbox.defaultProps = {
  className: '',
  label: 'Label',
  isLabel: false,
};

export default Checkbox;
