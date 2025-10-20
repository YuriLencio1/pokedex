const pokemonName = document.querySelector(".pokemon_name");
const pokemonId = document.querySelector(".pokemon_id");
const pokemonGif = document.querySelector(".pokemon_gif");
const pokemonform = document.querySelector(".form");
const pokemonInput = document.querySelector(".nameornumber");

const pokemonNext = document.querySelector(".btn-next");
const pokemonPrev = document.querySelector(".btn-prev");

const fetchPokemon = async (pokemon) => {
  const APIpokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIpokemon.status == 200) {
    const dado = await APIpokemon.json();
    return dado;
  }
};

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = "loading...";
  pokemonId.innerHTML = "";
  pokemonGif.innerHTML = ""

  const data = await fetchPokemon(pokemon);
  if (data) {
    pokemonGif.style.display = "block"
    pokemonName.innerHTML = data.name;
    pokemonId.innerHTML = data.id;
    pokemonGif.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
  } else {
    pokemonGif.style.display = "none"
    pokemonName.innerHTML = "Não encontrado";
    pokemonId.innerHTML = "";
  }
};



pokemonform.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPokemon(pokemonInput.value.toLowerCase());
  pokemonInput.value = "";
});

pokemonNext.addEventListener("click", () =>
  alert('next clicked')

);

pokemonPrev.addEventListener("click", () =>
  alert('prev clicked')

);
  

renderPokemon('1')

