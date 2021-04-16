/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Multiselect } from 'multiselect-react-dropdown';

import { styleLight } from './style/stylelight';

import './style.scss';

const styleDark = {
  searchBox: {
    padding: '16px',
    borderRadius: '30px',
    border: '2px solid black',
    fontSize: '1rem',
    fontFamily: 'Spartan, sans-serif',
  },
  chips: {
    background: '#373736',
    fontSize: '1rem',
    color: '#F0E088',
    fontFamily: 'Spartan, sans-serif',
  },

  optionContainer: { // To change css for option container
    width: '90%',
    margin: '0 auto',
  },

  option: { // To change css for dropdown options
    color: '#373736',
  },

  groupHeading: { // To chanage group heading style
    background: 'red',
  },
};

const Dropdown = ({
  className,
  selectedValues,
  placeholder,
  isLabel,
  label,
  name,
  options,
  color,
}) => {
  const handleChangeValue = (evt) => {
    console.log('changement de valeur');
    console.log(evt);
  };
  return (
    <div className={`dropdownGroup ${className}`}>
      {isLabel && <label className="dropdownGroup__label-dark" htmlFor={name}>{label}</label>}
      <Multiselect
        options={options}
        displayValue="name"
        placeholder={placeholder}
        selectedValues={selectedValues}
        showArrow
        emptyRecordMsg="Vous n'avez rien sélectionné"
        onSelect={handleChangeValue}
        style={color === 'dark' ? styleDark : styleLight}
        className={color === 'light' ? 'ok' : ''}
      />
    </div>
  );
};

Dropdown.propTypes = {
  selectedValues: PropTypes.array,
  color: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
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

Dropdown.defaultProps = {
  selectedValues: [],
  className: '',
  placeholder: 'Text',
  label: 'Label',
  isLabel: false,
  color: 'dark',
};

export default Dropdown;
