export const getCharacters = searchStatusTerm => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/?character/${searchStatusTerm}`,
    {
      headers: {
        origin: null
      }
    }
  )
    .then(res => res.json())
    .then(characters =>
      characters.map(({ name, image, status }) => ({
        name,
        image,
        status
      }))
    );
};
