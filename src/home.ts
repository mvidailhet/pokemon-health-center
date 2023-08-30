import { Pokemon } from './models/pokemon.js'; 
import { Utils } from './utils.js';

const bulbizarre = new Pokemon(1, 'male', "Bulbizarre");

const pokemonCards = document.querySelector(".pokemon-cards")! as HTMLElement;

function createPokemonCard (pokemon: Pokemon) {
  const card = Utils.createNewElement("div", 'pokemon-card', pokemonCards);

  const header = Utils.createNewElement("div", "pokemon-card-header", card);
  const img = Utils.createNewElement("div", "pokemon-card-img", header);

  const body = Utils.createNewElement("div", "pokemon-card-body", card);
  img.style.backgroundImage = `url("${pokemon.imgUrl}")`;
  Utils.createNewElement("h2", "pokemon-card-title", body, pokemon.name);
  Utils.createNewElement("p", "pokemon-card-text", body, `HP: ${pokemon.life.current}`);

  const healthbarContainer = Utils.createNewElement("div", "pokemon-health-bar-container", body);
  Utils.createNewElement("div", "pokemon-health-bar", healthbarContainer);

  Utils.createNewElement("button", "button pokemon-card-button", body, "Heal Now");
}

createPokemonCard(bulbizarre);

console.log(bulbizarre);
