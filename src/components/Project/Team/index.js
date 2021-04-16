import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/Assets/Card';

import './style.scss';

const Team = ({
  listOfStudents,
  teamMembers,
  studentLoading,
  fetchStudent,
}) => {
  useEffect(() => {
    fetchStudent();
  }, []);
  // console.log(studentLoading, listOfStudents);

  return (
    <div className="project__info--team">
      <h3 className="project__info--team-title">Membres de l'équipe</h3>

      {!studentLoading && (
      <div className="project__info--team-wrapper">
        {teamMembers.map((currentMember) => {
          // eslint-disable-next-line arrow-body-style
          const data = listOfStudents.filter((currentStudent) => {
            return (currentMember.user_id === currentStudent.id);
          });
          return (
            <Card
              key={currentMember.user_id}
              name={`${data[0].firstname} ${data[0].lastname}`}
              link={`/nos-etudiants/${currentMember.user_id}`}
              buttonText="Voir le profil"
              className="project__info--team-wrapper_card"
              image={data[0].picture}
            />
          );
        })}
      </div>
      )}
    </div>
  );
};
Team.propTypes = {
  listOfStudents: PropTypes.array.isRequired,
  teamMembers: PropTypes.array.isRequired,
  studentLoading: PropTypes.bool.isRequired,
  fetchStudent: PropTypes.func.isRequired,
};

export default Team;
