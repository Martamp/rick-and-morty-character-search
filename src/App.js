import React from 'react';
import './stylesheets/App.css';
import getApiData from './services/api.js';
import Header from './components/Header';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App">
      <Header />
      <CharacterList />
    </div>
  );
}

export default App;
