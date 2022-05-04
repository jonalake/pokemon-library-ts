"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
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
};
test("Returns Something", () => {
    expect((0, functions_1.createAbilitiesRequest)(pokemon)).toEqual(["https://pokeapi.co/api/v2/ability/7/"]);
});
