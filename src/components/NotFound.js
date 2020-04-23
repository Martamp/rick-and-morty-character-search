import React from 'react';
import logo from '../images/logo-rick-and-morty.png';
import imgNotFound from '../images/not-found.jpeg';
import { Link } from 'react-router-dom';
function NotFound(props) {
  return (
    <>
      <div className="background">
        <img className="container--img" src={logo} alt="logo" />
        <Link to="/" className="return--button">
          Volver
        </Link>
        <div className="detail--container--notfound">
          <img className="container--img" src={imgNotFound} alt="AHHHHHHH MIS OJOS" />
          <h1>No hemos encontrado el personaje que buscabas</h1>
        </div>
      </div>
    </>
  );
}

export default NotFound;
