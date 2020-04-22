import React from 'react';
import logo from '../images/logo-rick-and-morty.png';

function Header() {
  const handleInput = (ev) => {
    console.log(ev.target.value);
  };
  return (
    <>
      <header className="App">
        <img className="container--img" src={logo} alt="logo" />
        <form>
          <input className="container--input" type="text" placeholder="Busca un personaje" onChange={handleInput} />
        </form>
      </header>
    </>
  );
}

export default Header;
