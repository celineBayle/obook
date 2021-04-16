import React from 'react';
import Card from 'src/components/Assets/Card';
import julien from 'src/assets/img/julien.jpg';
import guillaume from 'src/assets/img/guillaume.jpg';
import celine from 'src/assets/img/celine.jpg';
import thomas from 'src/assets/img/thomas.jpg';
import './style.scss';

const Team = () => (
  <div className="team">
    <div className="team__title">
      <h1 className="team__title--text">TADAM! Mesdames, messieurs : La TEAM O'BOOK 
      </h1> 
    </div>     
    <div className="team__group">  
      <div className="team__group--front">
        <h2 className="team__group--front-title">
            Team FRONT
        </h2>
        <div className="team__group--front-card">
          <Card name="Thomas Bélénus" buttonText="Lead Dev" image={thomas}/>
          <Card name="Céline Bayle" buttonText="Product owner" image={celine}/>
        </div>     
      </div>
      <div className="team__group--back">
        <h2 className="team__group--back-title">
          Team BACK
        </h2>
        <div className="team__group--back-card">
          <Card name="Julien Vidal" buttonText="Git-master" image={julien}/>
          <Card name="Guillaume Hauspie" buttonText="Scrum-master" image={guillaume}/>
        </div>         
      </div>
    </div>
  </div>
);

export default Team;
