import { Pokemon } from './pokemon.js'; 

const pokemons = [
  new Pokemon(1, 'male', "Bulbizarre", 10),
  new Pokemon(25, 'male', "Pikachu", 20),
  new Pokemon(4, 'male', "Reptincel", 30),
  new Pokemon(7, 'male', "Carapuce", 50),
  new Pokemon(35, 'male', "Melofee", 70),
  new Pokemon(66, 'male', "Machop", 90),
]

// https://pokemoncries.com/cries-old/1.mp3



const healAllButton = document.querySelector('#heal-all-button')!;

function healAllPokemons() {
  pokemons.forEach(pokemon => pokemon.heal(false));
}

healAllButton.addEventListener("click", healAllPokemons, true);

