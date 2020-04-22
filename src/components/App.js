import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import getApiData from '../services/api.js';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);
  function handleInput(data) {
    console.log(data, 'mi data del handle');
    setName(data);
  }
  return (
    <div className="App">
      <Header handleInput={handleInput} />
      <CharacterList characters={characters} />
      {/* <CharacterDetail characters={characters} /> */}
    </div>
  );
}

export default App;
