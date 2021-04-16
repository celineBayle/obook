import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import Card from 'src/components/Assets/Card';

import BracketRight from '../../../assets/img/bracket__right.png';
import BracketLeft from '../../../assets/img/bracket_left.png';

import './style.scss';

const LastProducts = ({ listOfProject, fetchProject, loading }) => {
  useEffect(() => {
    fetchProject();
  }, []);

  console.log(listOfProject);

  return (
    <section className="lastProducts">
      <h1 className="lastProducts__title">Les derniers projets réalisés par nos étudiants </h1>
      <div className="lastProducts__design">
        <img src={BracketLeft} alt="" className="lastProducts__design--image" />
        {!loading
          && (
          <div className="lastProducts__design--projects">
            {listOfProject.slice(0, 6).map((currentProject) => (
              <Card
                key={currentProject.id}
                name={currentProject.name}
                image={currentProject.picture}
                className="lastProducts__design--projects-card"
                buttonText="VOIR LE PROJET"
                link={`/nos-projets/${currentProject.id}`}
              />
            ))}
          </div>
          )}
        {loading && (
        <div className="loading">
          <Loader type="ThreeDots" color="#00BFFF" height={200} width={200} />
        </div>
        )}
        <img src={BracketRight} alt="" className="lastProducts__design--image" />
      </div>
    </section>
  );
};

LastProducts.propTypes = {
  listOfProject: PropTypes.array.isRequired,
  fetchProject: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LastProducts;
