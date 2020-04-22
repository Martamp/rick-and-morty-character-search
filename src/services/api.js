const getApiData = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        console.log(character);
        return {
          id: character.id,
          name: character.name,
          img: character.image,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });
    });
};

export default getApiData;
//  .catch(function (error) {
//       console.log(error);
//     });
