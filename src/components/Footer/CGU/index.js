import React, { useEffect } from 'react';

import './style.scss';

const CGU = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
  <div className="CGU">
    <h1 className="CGU__title">Conditions Générales d'utilisation</h1>
      <div className="CGU__text">
        <p>Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.</p>
        <p>Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet O’book sont: O’book Team.  
        Site Web : www.obook.()</p>
        <h2 className="CGU__title2">Conditions d’utilisation :</h2>
        <p>Ce site (O’book) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc...) pour un meilleur confort d’utilisation et un graphisme plus agréable.</p>
        <p>Nous vous recommandons de recourir à des navigateurs modernes comme Firefox, Google Chrome, Safari, etc...</p>
        <p>L’équipe met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de ses sites internet.
        Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de O’book , et signaler toutes modifications du site qu’il jugerait utile. O’book n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirectpouvant en découler.</p>
        <p>Cookies : Le site O’book peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations . Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.</p>
        <p>Liens hypertextes : Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. O’book ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet.
        O’book ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.</p>
        <p>Les utilisateurs, les abonnés et les visiteurs des sites internet ne peuvent pas mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de O’book.Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction du site internet de O’book, il lui appartiendra d’adresser un email accessible sur le site afin de formuler sa demande de mise en place d’un hyperlien.O’book se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.</p>
        <p>Services fournis :O’book s’efforce de fournir des informations aussi précises que possible. Les renseignements figurant sur le site O’book ne sont pas exhaustifs et les photos non contractuelles.</p>
      </div>
  </div>
  );
};

export default CGU;
