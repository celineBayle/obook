import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Description = ({ description }) => (
  <div className="project__info--description">
    <h3 className="project__info--description-title">Description</h3>
    <p className="project__info--description-text">{description}</p>
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
