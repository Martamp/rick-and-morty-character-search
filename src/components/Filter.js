import React from 'react';

function Filter(props) {
  const handleInput = (ev) => {
    props.handleInput({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <form>
      <input className="container--input" type="text" placeholder="Busca un personaje" onChange={handleInput} />
    </form>
  );
}

export default Filter;
