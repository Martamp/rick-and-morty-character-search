import React from 'react';

function Filter(props) {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleInput({
      value: ev.target.value,
      key: 'name',
    });
  };
  return (
    <form>
      <input className="container--input" type="text" placeholder="Busca un personaje" value={props.filteredBy} onChange={handleInput} />
    </form>
  );
}

export default Filter;
