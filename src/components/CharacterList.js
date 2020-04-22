import React from 'react';
import prueba from '../images/prueba.png';
import Character from './Character';

function CharacterList() {
  return (
    <ul className="list">
      <Character />
      {/* <li className="list--element">
        <img className="list--img" src={prueba} alt="logo" />
        <div className="list--container">
          <h3 className="list--name">RIck Sanchez</h3>
          <small>Human</small>
        </div>
      </li>
      <li className="list--element">
        <img className="list--img" src={prueba} alt="logo" />
        <div className="list--container">
          <h3 className="list--name">RIck Sanchez</h3>
          <small>Human</small>
        </div>
      </li> */}
    </ul>
  );
}

export default CharacterList;
