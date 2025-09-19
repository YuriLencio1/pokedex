const fetchpokemon = async (pokemon) => {
  const APIpokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  const dados = await APIpokemon.json();

  return dados;
};

fetchpokemon("1");
