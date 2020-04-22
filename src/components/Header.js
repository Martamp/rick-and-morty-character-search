import React from 'react';
import logo from '../images/logo-rick-and-morty.png';

function Header() {
  return (
    <header className="App">
      <img className="container--img" src={logo} alt="logo" />
      <form>
        <input className="container--input" type="text" placeholder="Busca un personaje" />
      </form>
    </header>
  );
}

export default Header;
