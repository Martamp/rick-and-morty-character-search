import React from 'react';
import logo from '../images/logo-rick-and-morty.png';

function Header(props) {
  const handleInput = (ev) => {
    props.handleInput({
      value: ev.target.value,
      key: 'name',
    });
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
