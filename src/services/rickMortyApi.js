export const getCharacter = () => {
  const randomNum = Math.floor(Math.random() * 493) + 1;

  return fetch(`https://rickandmortyapi.com/api/character/${randomNum}`)
    .then(res => res.json())
    .then(({ image, name, status }) => ({
      image,
      name,
      status
    }));
};

export const getCharactersByStatus = searchStatusTerm => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?${searchStatusTerm}`,
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
