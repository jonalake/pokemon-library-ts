import { createPokemonDetails } from "./functions";

const name = "Bulbasaur"
const pokemon = {
  sprites: {
    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
  }
}

test("Returns Something", () => {
  expect(createPokemonDetails(pokemon, name)).toBeDefined();
});

