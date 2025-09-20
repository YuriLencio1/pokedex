const pokemonName = document.querySelector('.pokemon_name');
const pokemonId = document.querySelector('.pokemon_id');
const pokemonGif = document.querySelector('.pokemon_gif')


const fetchPokemon = async (pokemon) => {
  const APIpokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const dado = await APIpokemon.json();
  return dado;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
  pokemonName.innerHTML = data.name;
  pokemonId.innerHTML = data.id
  pokemonGif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
};

renderPokemon('234');
