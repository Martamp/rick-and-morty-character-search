import React from 'react';
import prueba from '../images/prueba.png';

function Character() {
  return (
    <li className="list--element">
      <img className="list--img" src={prueba} alt="logo" />
      <div className="list--container">
        <h3 className="list--name">Rick Sanchez</h3>
        <small>Human</small>
      </div>
    </li>
  );
}

export default Character;
