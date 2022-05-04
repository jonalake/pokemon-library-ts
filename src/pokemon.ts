import _ from "lodash"
const url = new URL(`${window.location}`)
const queryString = new URLSearchParams(url.search)
const main = document.querySelector("main")

fetch(`https://pokeapi.co/api/v2/pokemon/${queryString.get("pokemon")}`)
    .then(response => response.json())
    .then(pokemon => {
        const name = `${_.capitalize(pokemon.name)}`
        const title = document.querySelector("title")
        if (title) {
            title.textContent = name
        }
        const pokemonDetails = document.createElement("div")
        pokemonDetails.classList.add("pokemon-details")
        pokemonDetails.innerHTML = `
            <figure>
                <img src="${pokemon.sprites.front_shiny}" alt="${name}" />
                <figcaption>${name}</figcaption>
            </figure>

            <h2>Abilities</h2>
        `;

        interface Ability {
            name: string;
            url: string;
        }

        interface Abilities {
            ability: Ability;
        }


        main?.append(pokemonDetails);
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
        spinner.classList.add("hidden")
    })