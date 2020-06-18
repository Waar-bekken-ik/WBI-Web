import React from 'react';
import Home from './components/pages/homepage/Home';
import Start from './components/pages/startpage/Start';
import Game from './components/pages/gamepage/Game';
import Lobby from './components/pages/lobbypage/Lobby';
import { useStore } from './store';
import './App.css';

function App() {
  const { gamePhase } = useStore();

  switch (gamePhase) {
    case undefined:
      return <Home />
    case 'start':
      return <Start />
    case 'lobby':
      return <Lobby />
    case 'screen':
      return <Game />
    case 'game':
      return <Game />
    case 'highscore':
      return <Game />
    default:
      break;
  }
}

export default App;
