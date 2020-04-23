import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import getApiData from '../services/api.js';
import CharacterDetail from './CharacterDetail';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import NotFound from './NotFound';

function App() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);
  function handleInput(data) {
    setName(data.value);
    setValue(data.value);
  }

  function handleHomePage() {
    const filter = characters.filter((character) => {
      return character.name.toLowerCase().includes(name.toLowerCase());
    });
    return <Homepage handleInput={handleInput} characters={filter} filteredBy={value} />;
  }
  //  function handleHomePage() {
  //    const filter = characters.filter((character) => {
  //      return character.name.toLowerCase().includes(name.toLowerCase());
  //    });
  //    const myfilter = filter ? <Homepage handleInput={handleInput} characters={filter} filteredBy={value} /> : <NotFound />;
  //    return myfilter;
  //  }

  const handleCharacterDetail = (props) => {
    const detailId = parseInt(props.match.params.id);
    const myCharacterDetail = characters.find((character) => {
      return character.id === detailId;
    });
    if (myCharacterDetail !== undefined) {
      return <CharacterDetail character={myCharacterDetail} />;
    } else {
      return <NotFound />;
    }
  };

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
