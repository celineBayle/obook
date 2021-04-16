import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Input = ({
  value,
  inputColor,
  className,
  type,
  placeholder,
  isLabel,
  label,
  name,
}) => {
  const handleChangeValue = () => {
    console.log('changement de valeur');
  };
  return (
    <div className="fieldGroup">
      {isLabel && <label className={`fieldGroup__label-${inputColor}`} htmlFor={name}>{label}</label>}
      <input
        type={type}
        className={`input-${inputColor} ${className}`}
        value={value}
        onChange={handleChangeValue}
        placeholder={placeholder}
        id={name}
        name={name}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  inputColor: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isLabel: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  value: '',
  className: '',
  type: 'text',
  placeholder: 'Text',
  label: 'Label',
  isLabel: false,
};

export default Input;
