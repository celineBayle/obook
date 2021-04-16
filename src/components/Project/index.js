import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import Err404 from 'src/components/error/Err404';
import Team from 'src/containers/Project/Team';
import Description from './Description';

import './style.scss';

const Project = ({
  putIdOfProjectPage,
  fetchProjectById,
  dataProjectWithId,
  dataProjectWithIdLoading,
}) => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    putIdOfProjectPage();
    fetchProjectById();
  }, []);

  console.log(dataProjectWithId.youtube_link);

  return (
    <div className="content">
      {dataProjectWithIdLoading
        && (
          <div className="loading">
            <Loader type="ThreeDots" color="#00BFFF" height={200} width={200} />
          </div>
        )}
      {!dataProjectWithIdLoading && Object.keys(dataProjectWithId).length === 0 && <Err404 />}
      {!dataProjectWithIdLoading && Object.keys(dataProjectWithId).length !== 0
        && (
        <div className="project">
          <div
            className="project__goBack"
            onClick={() => {
              history.goBack();
            }}
          ><FaArrowLeft /> Retour
          </div>
          <div className="project__info">
            <div className="project__header">
              <div className="project__header--visual">
                <img className="project__header--visual-img" src={dataProjectWithId.picture} alt="vignette du projet" />
              </div>
              <h1 className="project__header--title">{dataProjectWithId.name}</h1>
              <div className="project__header--buttons">

                {dataProjectWithId.youtube_link !== null && (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  type="button"
                  className="project__header--buttons-btn"
                  onClick={() => {
                    window.open(`${dataProjectWithId.youtube_link}`);
                  }}
                >
                  YOUTUBE
                </button>
                )}

                {dataProjectWithId.git_link !== null && (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  type="button"
                  className="project__header--buttons-btn"
                  onClick={() => {
                    window.open(`${dataProjectWithId.git_link}`);
                  }}
                >
                  GITHUB
                </button>
                )}

                {dataProjectWithId.prod_link !== null && (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  type="button"
                  className="project__header--buttons-btn"
                  onClick={() => {
                    window.open(`${dataProjectWithId.prod_link}`);
                  }}
                >
                  PRODUCTION
                </button>
                )}
              </div>
            </div>
            <Description description={dataProjectWithId.description} />
          </div>
          <Team
            teamMembers={dataProjectWithId.team}
          />

        </div>
        )}
    </div>
  );
};

Project.propTypes = {
  putIdOfProjectPage: PropTypes.func.isRequired,
  dataProjectWithId: PropTypes.object.isRequired,
  fetchProjectById: PropTypes.func.isRequired,
  dataProjectWithIdLoading: PropTypes.bool.isRequired,
};

export default Project;
