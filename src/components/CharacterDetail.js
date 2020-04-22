import React from 'react';
import prueba from '../images/prueba.png';
import logo from '../images/logo-rick-and-morty.png';
function CharacterDetail(props) {
  return (
    <>
      <div className="background">
        <img className="container--img" src={logo} alt="logo" />
        {/* <span className="return--container"> */}
        <p className="return--button">Volver</p>
        <div className="detail--container">
          <img className="detail--img" src={prueba} alt="img" />
          <span className="detail--text--container">
            <h3 className="list--name">Rickkkkk</h3>
            <small>Status:</small>
            <small>Species:</small>
            <small>Origin:</small>
            <small>Episodes:</small>
          </span>
        </div>
      </div>
      {/* </span> */}
    </>
  );
}

export default CharacterDetail;