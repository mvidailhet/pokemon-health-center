import { HealingMachine } from './healing-machine.js';
import { Pokemon } from './pokemon.js'; 

const pokemons = [
  new Pokemon(1, 'male', "Bulbizarre", 10),
  new Pokemon(25, 'male', "Pikachu", 20),
  new Pokemon(4, 'male', "Reptincel", 30),
  new Pokemon(7, 'male', "Carapuce", 50),
  new Pokemon(35, 'male', "Melofee", 70),
  new Pokemon(66, 'male', "Machop", 90),
];

const healingMachine = new HealingMachine(pokemons);
