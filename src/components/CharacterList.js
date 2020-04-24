import React from 'react';
import Character from './Character';
import propTypes from 'prop-types';
import defautImg from '../images/pngocean.com.png';
function CharacterList(props) {
  const myCharacter = props.characters.map((character) => {
    return <Character key={character.id} character={character} />;
  });
  if (props.characters.length === 0) {
    return (
      <>
        <p className="not-found--text">No hemos encontrado {props.filteredBy}</p>
        <img className="not-found--img" src={defautImg} alt="MIS OJOOOOOS" />{' '}
      </>
    );
  } else {
    return <ul className="list">{myCharacter}</ul>;
  }
}
CharacterList.propTypes = {
  character: propTypes.object,
};

export default CharacterList;
