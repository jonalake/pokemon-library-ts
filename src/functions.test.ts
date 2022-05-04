import { createAbilitiesRequest } from "./functions";

const pokemon = {
  abilities: [{
    ability: {
      name: "limber",
      url: "https://pokeapi.co/api/v2/ability/7/",
    }
  }],
  sprites: {
    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
  }
}

test("Returns Something", () => {
  expect(createAbilitiesRequest(pokemon)).toEqual(["https://pokeapi.co/api/v2/ability/7/"]);
});

