import React from 'react';
import logo from './images/logo-rick-and-morty.png';
import './stylesheets/App.css';
import prueba from './images/prueba.png';

function App() {
  return (
    <div className="App">
      <img className="container--img" src={logo} alt="logo" />
      <form>
        <input className="container--input" type="text" placeholder="Busca un personaje" />
      </form>
      <ul className="list">
        <li className="list--element">
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
        </li>
        <li className="list--element">
          <img className="list--img" src={prueba} alt="logo" />
          <div className="list--container">
            <h3 className="list--name">RIck Sanchez</h3>
            <small>Human</small>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
