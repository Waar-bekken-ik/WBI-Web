import React from 'react';
import Home from './components/pages/homepage/Home';
import Start from './components/pages/startpage/Start';
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
      return null
    default:
      break;
  }
}

export default App;
