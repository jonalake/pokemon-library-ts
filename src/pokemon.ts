import _ from "lodash"
import { createPokemonDetails } from "./functions"
const url = new URL(`${window.location}`)
const queryString = new URLSearchParams(url.search)
const main = document.querySelector("main")

interface Abilities {
    ability: {
        name: string;
        url: string;
    }
}

fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
    .then(response => response.json())
    .then(pokemon => {
        const name = `${_.capitalize(pokemon.name)}`
        const title = document.querySelector("title")
        if (title) {
            title.textContent = name
        }
        main?.append(createPokemonDetails(pokemon, name));
        const abilitiesRequests = pokemon.abilities
            .map((pokemon: Abilities) => pokemon.ability.url)
            .map((url: string) => {
                return fetch(url).then(response => response.json())
            })
        return Promise.all(abilitiesRequests)
    }).then(abilities => {
        const ul = document.createElement("ul")
        ul.classList.add("abilities")
        main?.append(ul)
        abilities.map(ability => {
            const li = document.createElement("li")
            li.innerHTML = `
                <span class="ability-name">${_.capitalize(ability.name)}</span>
                <span class="ability-short-description">${ability.effect_entries[1].short_effect}</span> 
                `
            return li;
        }).forEach(li => {
            ul.append(li)
        })
        const spinner = document.querySelector(".spinner")
        spinner?.classList.add("hidden")
    })
