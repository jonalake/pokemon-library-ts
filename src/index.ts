import _ from "lodash"
const ul = document.querySelector<HTMLUListElement>("ul")

fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=3")
  .then(response => response.json())
  .then((response) => {
    const pokemonList = response.results;
    interface Pokemon {
      name: string;
      url: string;
    }
    const httpRequests = pokemonList
      .map((pokemon: Pokemon) => pokemon.url)
      .map((url: string) => {
        return fetch(url).then(response => response.json())
      })
    return Promise.all(httpRequests)
  }).then(responses => {
    responses.map(response => {
      const pokemonListing = document.createElement("div")
      pokemonListing.classList.add("pokemon-listing")
      const name = `${_.capitalize(response.species.name)}`
      pokemonListing.innerHTML = `
        <figure>
          <img src="${response.sprites.front_shiny}" alt="${name}" />
          <figcaption><a href="pokemon.html?pokemon=${response.id}">${name}</a></figcaption>
        </figure>
      `
      return pokemonListing
    }).forEach(pokeListing => {
      ul?.append(pokeListing)
    })
  })
