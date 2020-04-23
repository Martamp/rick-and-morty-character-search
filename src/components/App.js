import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import getApiData from '../services/api.js';
import Header from './Header';
import Filter from './Filter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);
  function handleInput(data) {
    setName(data.value);
  }

  const filter = characters.filter((character) => {
    return character.name.toLowerCase().includes(name.toLowerCase());
  });

  function handleCharacterDetail() {
    return <CharacterDetail />;
  }

  return (
    <div className="App">
      <Header />
      <Filter handleInput={handleInput} />
      <CharacterList characters={filter} />
      <Switch>
        <Route exact path="/character/:id" render={handleCharacterDetail} />
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
