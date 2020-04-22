const getApiData = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default getApiData;
