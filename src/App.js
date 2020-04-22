import React, { useEffect, useState } from 'react';
import './stylesheets/App.css';
import getApiData from './services/api.js';
import Header from './components/Header';
import CharacterList from './components/CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);
  console.log(characters);
  return (
    <div className="App">
      <Header />
      <CharacterList />
    </div>
  );
}

export default App;
