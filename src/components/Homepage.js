import React from 'react';
import Header from './Header';
import Filter from './Filter';
import CharacterList from './CharacterList';

function Homepage(props) {
  return (
    <div className="App">
      <Header />
      <Filter handleInput={props.handleInput} filteredBy={props.filteredBy} />
      <CharacterList characters={props.characters} filteredBy={props.filteredBy} />
    </div>
  );
}

export default Homepage;
