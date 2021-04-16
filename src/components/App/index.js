// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';

import Home from 'src/components/Home';

import AllStudent from 'src/containers/AllStudent';
import AllProject from 'src/containers/AllProject';

import Profil from 'src/containers/Profil';
import Project from 'src/containers/Project';

import Team from 'src/components/Footer/Team';
import CGU from 'src/components/Footer/CGU';
import Mentions from 'src/components/Footer/Mentions';
import Coockies from 'src/components/Footer/Coockies';
import Err404 from 'src/components/error/Err404';

// == Import
import './style.scss';

// == Composant
const App = ({ isConnectedInSessionOrNot }) => {
  useEffect(() => {
    isConnectedInSessionOrNot();
  }, []);
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/nos-etudiants/:id" exact>
          <Profil />
        </Route>
        <Route path="/nos-etudiants" exact>
          <AllStudent />
        </Route>
        <Route path="/nos-projets" exact>
          <AllProject />
        </Route>
        <Route path="/nos-projets/:id" exact>
          <Project />
        </Route>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/CGU" exact>
          <CGU />
        </Route>
        <Route path="/mentions" exact>
          <Mentions />
        </Route>
        <Route path="/coockies" exact>
          <Coockies />
        </Route>
        <Route>
          <Err404 />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  isConnectedInSessionOrNot: PropTypes.func.isRequired,
};

// == Export
export default App;
