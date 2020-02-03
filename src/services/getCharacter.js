const randomNum = Math.floor(Math.random() * 493) + 1; 

export const getCharacter = () => {
  return fetch(`https://rickandmortyapi.com/api/character/${randomNum}`)
    .then(res => res.json())
    .then(([{ name, image }]) => ({
      name: name,
      img: image
    }));
};


