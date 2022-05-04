"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPokemonDetails = void 0;
function createPokemonDetails(pokemon, name) {
    const pokemonDetails = document.createElement("div");
    pokemonDetails.classList.add("pokemon-details");
    pokemonDetails.innerHTML = `
            <figure>
                <img src="${pokemon.sprites.front_shiny}" alt="${name}" />
                <figcaption>${name}</figcaption>
            </figure>

            <h2>Abilities</h2>
        `;
    return pokemonDetails;
}
exports.createPokemonDetails = createPokemonDetails;
