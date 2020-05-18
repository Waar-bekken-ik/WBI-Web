import React from 'react';
import Home from './components/pages/homepage/Home';
import Start from './components/pages/startpage/Start';
import Game from './components/pages/gamepage/Game';
import Lobby from './components/pages/lobbypage/Lobby';
import './App.css';
import { useStore } from './store';

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
    default:
      break;
  }
}

export default App;
