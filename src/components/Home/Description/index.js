import React from 'react';

import logo from 'src/assets/img/oclocklogo.png';

import './style.scss';

const Description = () => (
  <section className="Description">
    <div className="Description__page">
      <h1 className="Description__page--title">"L’appothéose", l’une des étapes les plus importantes de la formation</h1>
      <p className="Description__page--text">
        Marty et Mcfly étant une double promotion :
        on dégaine un dispositif exceptionnel. Au menu : deux lives simultanés par jour le 4 et le
        5 mars On commence le 4 avec les groupes Blue et on enchainera le 5 mars avec les Red.
        Pour la p'tite info, les promos Marty et McFly sont les 41è et 42è
        promotion de l'école O'clock à s'être formées dans nos salles de
        classe virtuelles pour devenir développeur web.
        D'ailleurs ce site est un projet d'apothéose ^^.
      </p>
      <iframe
        title="youtube_video"
        src="https://www.youtube.com/embed/cUmVOtmj_qE"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="Description__page--video"
      />
    </div>
    <div className="Description__school">
      <img src={logo} alt="" className="Description__school--image" />
      <p className="Description__school--textEcole">
        Envie de découvrir cette fabuleuse école qu’est O’clock ?
        Tu veux comprendre son fonctionnement et découvrir les formations proposées ?
        Alors ce lien est fait pour toi &#128521;
      </p>
      <button
        type="button"
        className="Description__school--button"
        onClick={() => {
          window.open('https://oclock.io/');
        }}
      >
        VOIR LE SITE
      </button>
    </div>
  </section>
);

export default Description;
