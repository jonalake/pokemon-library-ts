"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const url = new URL(`${window.location}`);
const queryString = new URLSearchParams(url.search);
const main = document.querySelector("main");
fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
    .then(response => response.json())
    .then(pokemon => {
    const name = `${lodash_1.default.capitalize(pokemon.name)}`;
    const title = document.querySelector("title");
    if (title) {
        title.textContent = name;
    }
    const pokemonDetails = document.createElement("div");
    pokemonDetails.classList.add("pokemon-details");
    pokemonDetails.innerHTML = `
            <figure>
                <img src="${pokemon.sprites.front_shiny}" alt="${name}" />
                <figcaption>${name}</figcaption>
            </figure>

            <h2>Abilities</h2>
        `;
    main === null || main === void 0 ? void 0 : main.append(pokemonDetails);
    const abilitiesRequests = pokemon.abilities
        .map((pokemon) => pokemon.ability.url)
        .map((url) => {
        return fetch(url).then(response => response.json());
    });
    return Promise.all(abilitiesRequests);
}).then(abilities => {
    const ul = document.createElement("ul");
    ul.classList.add("abilities");
    main === null || main === void 0 ? void 0 : main.append(ul);
    abilities.map(ability => {
        const li = document.createElement("li");
        li.innerHTML = `
                <span class="ability-name">${lodash_1.default.capitalize(ability.name)}</span>
                <span class="ability-short-description">${ability.effect_entries[1].short_effect}</span> 
                `;
        return li;
    }).forEach(li => {
        ul.append(li);
    });
    const spinner = document.querySelector(".spinner");
    spinner.classList.add("hidden");
});
