import React from 'react';
import Character from './Character';
import propTypes from 'prop-types';
function CharacterList(props) {
  const myCharacter = props.characters.map((character) => {
    return <Character key={character.id} character={character} />;
  });
  return <ul className="list">{myCharacter}</ul>;
}
CharacterList.propTypes = {
  character: propTypes.object,
};

export default CharacterList;
