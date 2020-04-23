import React from 'react';
import logo from '../images/logo-rick-and-morty.png';

function Header() {
  return (
    <header className="App">
      <img className="container--img" src={logo} alt="logo" />
    </header>
  );
}

export default Header;
