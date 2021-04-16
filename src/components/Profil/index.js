/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { useHistory, useParams } from 'react-router-dom';

import DefaultTechnoLogo from 'src/assets/img/Techno.png';
import Button from 'src/components/Assets/Button';
import Form from 'src/components/Form';
import { FaArrowLeft } from 'react-icons/fa';

import Err404 from 'src/components/error/Err404';
import Card from 'src/components/Assets/Card';
import AddProjectForm from 'src/containers/Profil/AddProjectForm';
import EditForm from './EditForm';

import './style.scss';

const Profil = ({
  putIdOfStudentPage,
  fetchStudentById,
  dataStudentWithId,
  loadingWithId,
  listOfProject,
  fetchProject,
  projectLoading,
}) => {
  // window.location.reload();
  const history = useHistory();
  const sessionId = sessionStorage.getItem('user_id');
  const slug = useParams().id;

  const [isOpenEditForm, setisOpenEditForm] = useState(false);
  const [isOpenAddProjectForm, setIsOpenAddProjectForm] = useState(false);

  console.log(slug, sessionId);

  useEffect(() => {
    window.scrollTo(0, 0);
    putIdOfStudentPage();
    fetchStudentById();
    fetchProject();
  }, []);

  console.log(dataStudentWithId, listOfProject, projectLoading);

  const constHandleEditForm = () => {
    window.scrollTo(0, 0);
    setisOpenEditForm(!isOpenEditForm);
  };

  const constOpenAddProjectForm = () => {
    window.scrollTo(0, 0);
    setIsOpenAddProjectForm(!isOpenAddProjectForm);
  };

  return (
    <div>
      {isOpenEditForm
        && (
        <Form handleClose={constHandleEditForm} title="Modifier votre profil">
          <EditForm />
        </Form>
        )}

      {isOpenAddProjectForm
        && (
        <Form handleClose={constOpenAddProjectForm} title="Ajouter un projet">
          <AddProjectForm />
        </Form>
        )}

      {loadingWithId
        && (
          <div className="loading">
            <Loader type="ThreeDots" color="#00BFFF" height={200} width={200} />
          </div>
        )}

      {!loadingWithId && Object.keys(dataStudentWithId).length === 0 && <Err404 />}
      {!loadingWithId && Object.keys(dataStudentWithId).length !== 0
        && (
          <div className="profil">
            <div className="profil__top">
              <div
                className="profil__top--back"
                onClick={() => {
                  history.goBack();
                }}
              ><FaArrowLeft /> Retour
              </div>
              {sessionId == slug && <Button text="MODIFIER" isPlain buttonColor="dark" className="profil__top--btn" onClick={constHandleEditForm} />}
            </div>

            <div className="profil__introduction profil_container before">
              <div className="profil__introduction--imageIntroduction">
                <div className="profil__introduction--imageIntroduction-work"><div className={`${dataStudentWithId.isSearchJob ? 'ready' : 'notReady'}`}></div>Open to work</div>
                <img className="profil__introduction--imageIntroduction-profil" src={dataStudentWithId.picture} alt="student" />
              </div>
              <div className="profil__introduction--info">
                <h1 className="profil__introduction--info-name">{dataStudentWithId.firstname} {dataStudentWithId.lastname}</h1>
                <p className="profil__introduction--info-orientation">({dataStudentWithId.spe[0].name})</p>
                <p className="profil__introduction--info-orientation"><strong>Contact :</strong> {dataStudentWithId.email}</p>
              </div>
            </div>

            <div className="top">

              <div className="profil__introduction profil_container">
                <div className="profil__introduction--imageIntroduction">
                  <div className="profil__introduction--imageIntroduction-work"><div className={`${dataStudentWithId.isSearchJob ? 'ready' : 'notReady'}`}></div>Open to work</div>
                  <img className="profil__introduction--imageIntroduction-profil" src={dataStudentWithId.picture} alt="student" />
                </div>
                <div className="profil__introduction--info">
                  <h1 className="profil__introduction--info-name">{dataStudentWithId.firstname} {dataStudentWithId.lastname}</h1>
                  <p className="profil__introduction--info-orientation">({dataStudentWithId.spe[0].name})</p>
                  <p className="profil__introduction--info-orientation">Contact : {dataStudentWithId.email}</p>
                </div>
              </div>

              <div className="top__right">
                <div className="profil__favoriteContract profil_container">
                  <h2 className="profil__favoriteContract--title profil_h2">Mes contrats préférés</h2>
                  <div className="profil__favoriteContract--box">
                    {dataStudentWithId.contrat.map((currentCrontract) => (
                      <div className="profil__favoriteContract--box-contract">{currentCrontract.name}</div>
                    ))}
                  </div>
                </div>

                <div className="profil__technos profil_container">
                  <h2 className="profil__technos--title profil_h2">Mes technos</h2>
                  <div className="profil__technos--box">
                    {dataStudentWithId.techno.map((currentTechno) => (
                      <div key={currentTechno.name} className="profil__technos--box-techno">
                        <div className="profil__technos--box-techno_image">
                          <img src={currentTechno.logo === null ? DefaultTechnoLogo : currentTechno.logo} alt="" />
                        </div>
                        <div className="profil__technos--box-techno_title">{currentTechno.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="profil__whoAmI profil_container">
              <h2 className="profil__whoAmI--title profil_h2">Qui suis-je ?</h2>
              <p className="profil__whoAmI--description">{dataStudentWithId.story}</p>
            </div>

            <div className="bottom">
              <div className="profil__favoriteContract profil_container">
                <h2 className="profil__favoriteContract--title profil_h2">Mes contrats préférés</h2>
                <div className="profil__favoriteContract--box">
                  {dataStudentWithId.contrat.map((currentCrontract) => (
                    <div className="profil__favoriteContract--box-contract">{currentCrontract.name}</div>
                  ))}
                </div>
              </div>
              <div className="profil__technos profil_container">
                <h2 className="profil__technos--title profil_h2">Mes technos</h2>
                <div className="profil__technos--box">
                  {dataStudentWithId.techno.map((currentTechno) => (
                    <div key={currentTechno.name} className="profil__technos--box-techno">
                      <div className="profil__technos--box-techno_image">
                        <img src={currentTechno.logo === null ? DefaultTechnoLogo : currentTechno.logo} alt="" />
                      </div>
                      <div className="profil__technos--box-techno_title">{currentTechno.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {!projectLoading && (dataStudentWithId.team.length !== 0 || sessionId == slug) && (
            <div className="profil__projets profil_container">
              <h2 className="profil__projets--title profil_h2">Mes projets</h2>
              <div className="profil__projets--box">
                {dataStudentWithId.team.map((currentProjectId) => {
                  const data = listOfProject.filter((currentProject) => (currentProject.id === currentProjectId));
                  return (
                    <Card
                      key={currentProjectId}
                      name={data[0].name}
                      buttonText="Voir le projet"
                      className="profil__projets--box-projet"
                      link={`/nos-projets/${currentProjectId}`}
                      image={data[0].picture}
                    />
                  );
                })}
              </div>
              {sessionId == slug && <Button text="AJOUTER UN PROJET" isPlain buttonColor="dark" className="profil__top--btn" onClick={constOpenAddProjectForm} />}
            </div>
            )}
          </div>
        )}
    </div>
  );
};

Profil.propTypes = {
  putIdOfStudentPage: PropTypes.func.isRequired,
  dataStudentWithId: PropTypes.object.isRequired,
  fetchStudentById: PropTypes.func.isRequired,
  loadingWithId: PropTypes.bool.isRequired,
  listOfProject: PropTypes.array.isRequired,
  fetchProject: PropTypes.func.isRequired,
  projectLoading: PropTypes.bool.isRequired,
};

export default Profil;
