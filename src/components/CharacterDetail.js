import React from 'react';
import logo from '../images/logo-rick-and-morty.png';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
function CharacterDetail(props) {
  const characterStatus = props.character.status === 'Dead' ? 'Dead ☠️' : 'Alive 🌱';
  const characterSpecies = props.character.species === 'Alien' ? '👽' : '👦';
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
            <small>Status: {characterStatus}</small>
            <small>Species: {characterSpecies}</small>
            <small>Origin: {props.character.origin}</small>
            <small>Episodes: {props.character.episodes}</small>
          </span>
        </div>
      </div>
    </>
  );
}
CharacterDetail.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  species: propTypes.string,
  status: propTypes.string,
  origin: propTypes.string,
  episodes: propTypes.number,
};

export default CharacterDetail;
