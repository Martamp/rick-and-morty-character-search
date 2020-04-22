import React from 'react';
import prueba from '../images/prueba.png';
import Character from './Character';

function CharacterList(props) {
  const myCharacter = props.characters.map((character) => {
    return <Character key={character.id} character={character} />;
  });
  return <ul className="list">{myCharacter}</ul>;
}

export default CharacterList;
