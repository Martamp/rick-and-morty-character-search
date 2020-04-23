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
    setName(data.value);
  }

  const filter = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });

  console.log(filter);
  return (
    <div className="App">
      <Header handleInput={handleInput} />
      <CharacterList characters={filter} />
      {/* <CharacterDetail characters={characters} /> */}
    </div>
  );
}

export default App;
