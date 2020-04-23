import React from 'react';
import logo from '../images/logo-rick-and-morty.png';
import { Link } from 'react-router-dom';
function CharacterDetail(props) {
  console.log(props.character.name);
  return (
    <>
      <div className="background">
        <img className="container--img" src={logo} alt="logo" />
        <Link to="/" className="return--button">
          Volver
        </Link>
        <div className="detail--container">
          <img className="detail--img" src={props.character.img} alt={props.character.name} />
          <span className="detail--text--container">
            <h3 className="list--name">{props.character.name}</h3>
            <small>Status: {props.character.status}</small>
            <small>Species: {props.character.species}</small>
            <small>Origin: {props.character.origin}</small>
            <small>Episodes: {props.character.episodes}</small>
          </span>
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
