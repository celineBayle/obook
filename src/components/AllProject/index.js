import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { FaArrowLeft } from 'react-icons/fa';

import Card from 'src/components/Assets/Card';
import Filter from 'src/containers/AllProject/Filter';

import './style.scss';

const AllProject = ({
  loading, filteredProjects, filtered, fetchFilteredProject,
}) => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFilteredProject();
  }, [filtered]);

  return (
    <div className="allProject">
      <div
        className="studentPage__retour"
        onClick={() => {
          history.goBack();
        }}
      ><FaArrowLeft /> Retour
      </div>
      <div className="allProject__contentTop">
        <h1 className="allProject__contentTop--title">On ne manque pas de pratique ici, découvrez nos nombreux projets</h1>
      </div>

      <div className="allProject__container">
        <Filter className="allProject__container--filter" pronjectNumber={filteredProjects.length} />
        <div className="allProject__container--listOfStudent">
          {loading
            && (
              <div className="loading">
                <Loader type="ThreeDots" color="white" height={200} width={200} />
              </div>
            )}
          {filteredProjects.length === 0 && (
          <p>Il n'y a aucun résultat</p>
          )}
          {!loading && filteredProjects.map((currentProject) => (
            <Card
              key={currentProject.id}
              name={`${currentProject.name}`}
              className="studentPage__container--listOfStudent-card"
              link={`/nos-projets/${currentProject.id}`}
              image={currentProject.picture}
              buttonText="VOIR LE PROJET`"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
AllProject.propTypes = {
  loading: PropTypes.bool.isRequired,
  filteredProjects: PropTypes.array.isRequired,
  filtered: PropTypes.string.isRequired,
  fetchFilteredProject: PropTypes.func.isRequired,
};

export default AllProject;
