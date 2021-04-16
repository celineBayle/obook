import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import student from 'src/assets/img/student.jpg';
import './style.scss';

const Card = ({
  name, link, className, buttonText, image,
}) => {
  const forceUpdate = () => {
    // window.location.reload();
  };
  return (
    <div className={`card ${className}`}>
      <img className="card__image" src={image} alt="student" />
      <div className="card__container">
        <h3 className="card__name">{name}</h3>
        <Link
          to={link}
          className="btn-light-plain"
          onClick={forceUpdate}
        >{buttonText}
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
  image: PropTypes.string,
};

Card.defaultProps = {
  link: '#',
  className: '',
  buttonText: 'Le texte de votre bouton',
  image: student,
};

export default Card;
