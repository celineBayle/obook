/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

import './style.scss';

const Radio = ({
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
    <div className={`radioGroup ${className}`}>
      {isLabel && <p className="radioGroup__label-dark">{label}</p>}
      {options.map((currentOption) => (
        <div key={currentOption.id} className="radioGroup__option">
          <input
            type="radio"
            className="radioGroup__option--input"
            value={currentOption.name}
            onChange={handleChangeValue}
            id={currentOption.name}
            name={name}
          />
          <label htmlFor={currentOption.name} className="radioGroup__option--label">{currentOption.name}</label>
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
  options: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Radio.defaultProps = {
  className: '',
  label: 'Label',
  isLabel: false,
};

export default Radio;
