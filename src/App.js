import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeroImage from './components/pages/homepage/Home';
import Start from './components/pages/startpage/Start';
import Lobby from './components/pages/lobbypage/Lobby';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => (
        <React.Fragment>
            <HeroImage/>
        </React.Fragment>
      )} />

      <Route exact path="/start" component={Start} />
      <Route exact path="/lobby" component={Lobby} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
