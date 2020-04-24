import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeroImage from './components/pages/homepage/Home';
import Start from './components/pages/startpage/Start';
import './App.css';
import Menu from './components/pages/homepage/Menu';

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
    </Switch>
    </BrowserRouter>
  );
}

export default App;
