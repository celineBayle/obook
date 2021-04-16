import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

// import Input from 'src/components/Assets/Input';
// import Button from 'src/components/Assets/Button';
import Card from 'src/components/Assets/Card';
import Filter from 'src/containers/AllStudent/Filter';

import './style.scss';

const AllStudent = ({
  changeFilteredDataValue,
  orientation,
  disponibility,
  filteredata,
  fetchStudent,
  loading,
}) => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchStudent();
    changeFilteredDataValue();
  }, [orientation, disponibility]);
  console.log(filteredata);
  return (
    <div className="studentPage">
      <div
        className="studentPage__retour"
        onClick={() => {
          history.goBack();
        }}
      ><FaArrowLeft /> Retour
      </div>
      <div className="studentPage__contentTop">
        <h1 className="studentPage__contentTop--title">Trouvez le profil qui vous correspond parmis nos étudiants</h1>
      </div>

      <div className="studentPage__container">
        <Filter className="studentPage__container--filter" filteredata={filteredata.length} />
        <div className="studentPage__container--listOfStudent">
          {loading
            && (
              <div className="loading">
                <Loader type="ThreeDots" color="white" height={200} width={200} />
              </div>
            )}
          {filteredata.length === 0 && (
          <p>Il n'y a aucun résultat</p>
          )}
          {!loading && filteredata.map((currentStudent) => (
            <Card
              key={currentStudent.id}
              name={`${currentStudent.firstname} ${currentStudent.lastname}`}
              className="studentPage__container--listOfStudent-card"
              link={`/nos-etudiants/${currentStudent.id}`}
              image={currentStudent.picture}
              buttonText="VOIR LE PROFIL"
            />
          ))}
        </div>
      </div>

    </div>
  );
};

AllStudent.propTypes = {
  filteredata: PropTypes.array.isRequired,
  fetchStudent: PropTypes.func.isRequired,
  changeFilteredDataValue: PropTypes.func.isRequired,
  orientation: PropTypes.string.isRequired,
  disponibility: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AllStudent;
