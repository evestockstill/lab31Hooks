
export const getCharacter = (randomNum) => {
  return fetch(`https://rickandmortyapi.com/api/character/${randomNum}`)
    .then(res => res.json());
};


