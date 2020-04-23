import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import getApiData from '../services/api.js';
import Header from './Header';
import Filter from './Filter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';

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

  function handleHomePage() {
    const filter = characters.filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    });
    return <Homepage handleInput={handleInput} characters={filter} />;
  }

  function handleCharacterDetail() {
    return <CharacterDetail />;
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={handleHomePage} />
        <Route path="/character/:id" render={handleCharacterDetail} /> />
      </Switch>
    </div>
  );
}

export default App;
