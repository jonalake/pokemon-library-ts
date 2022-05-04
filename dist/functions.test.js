"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
const name = "Bulbasaur";
const pokemon = {
    sprites: {
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
    }
};
test("Returns Something", () => {
    expect((0, functions_1.createPokemonDetails)(pokemon, name)).toBeDefined();
});
