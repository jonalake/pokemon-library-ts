interface Abilities {
  ability: {
    name: string;
    url: string;
  }
}
interface Pokemon {
  sprites: {
    front_shiny: string;
  }
  abilities: Abilities[]
}

export function createPokemonDetails(pokemon: Pokemon, name: string) {
  const pokemonDetails = document.createElement("div")
  pokemonDetails.classList.add("pokemon-details")
  pokemonDetails.innerHTML = `
            <figure>
                <img src="${pokemon.sprites.front_shiny}" alt="${name}" />
                <figcaption>${name}</figcaption>
            </figure>

            <h2>Abilities</h2>
        `;
  return pokemonDetails
}


export function createAbilitiesRequest(pokemon: Pokemon) {
  return pokemon.abilities.map((pokemon) => pokemon.ability.url)
}

