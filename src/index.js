"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const ul = document.querySelector("ul");
fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=3")
    .then(response => response.json())
    .then((response) => {
    const pokemonList = response.results;
    const httpRequests = pokemonList
        .map((pokemon) => pokemon.url)
        .map((url) => {
        return fetch(url).then(response => response.json());
    });
    return Promise.all(httpRequests);
}).then(responses => {
    responses.map(response => {
        const pokemonListing = document.createElement("div");
        pokemonListing.classList.add("pokemon-listing");
        const name = `${lodash_1.default.capitalize(response.species.name)}`;
        pokemonListing.innerHTML = `
        <figure>
          <img src="${response.sprites.front_shiny}" alt="${name}" />
          <figcaption><a href="pokemon.html?pokemon=${response.id}">${name}</a></figcaption>
        </figure>
      `;
        return pokemonListing;
    }).forEach(pokeListing => {
        ul === null || ul === void 0 ? void 0 : ul.append(pokeListing);
    });
    const spinner = document.querySelector(".spinner");
    spinner === null || spinner === void 0 ? void 0 : spinner.classList.add("hidden");
});
