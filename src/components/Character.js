import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import propTypes from 'prop-types';
function Character(props) {
  return (
    <Link to={`/character/${props.character.id}`}>
      <li className="list--element">
        <img className="list--img" src={props.character.img} alt={props.character.name} />
        <div className="list--container">
          <h3 className="list--name">{props.character.name}</h3>
          <small>{props.character.species}</small>
        </div>
      </li>
    </Link>
  );
}
Character.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  species: propTypes.string,
};
export default Character;
