import { Utils } from './utils.js';
import { ValueWithTotal } from './models/pokemon.js';

export class PokemonDomUtils {
  private static createPokemonCardHeader (cardElt: HTMLElement, pokemonImgUrl: string) {
    const header = Utils.createNewElement("div", "pokemon-card-header", cardElt);
    const img = Utils.createNewElement("div", "pokemon-card-img", header);
    img.style.backgroundImage = `url("${pokemonImgUrl}")`;
  }
  
  private static createPokemonBody (cardElt: HTMLElement, pokemonName: string, pokemonLife: ValueWithTotal) {
    const bodyElt = Utils.createNewElement("div", "pokemon-card-body", cardElt);
    Utils.createNewElement("h2", "pokemon-card-title", bodyElt, pokemonName);
    PokemonDomUtils.createPokemonHealthInfo(bodyElt, pokemonLife);
    PokemonDomUtils.createPokemonHealButton(bodyElt);
  }
  
  private static createPokemonHealthInfo(bodyElt: HTMLElement, pokemonLife: ValueWithTotal) {
    Utils.createNewElement("p", "pokemon-card-text", bodyElt, `HP: ${pokemonLife.current}`);
    const healthbarContainer = Utils.createNewElement("div", "pokemon-health-bar-container", bodyElt);
    const healthBar = Utils.createNewElement("div", "pokemon-health-bar", healthbarContainer);
  
    const percent = pokemonLife.current / pokemonLife.total * 100;
    console.log(percent);
  
    healthBar.style.width = `${ percent }%`;
  }
  
  private static createPokemonHealButton (bodyElt: HTMLElement) {
    Utils.createNewElement("button", "button pokemon-card-button", bodyElt, "Heal Now");
  }

  static createPokemonCard (pokemonCards: HTMLElement, pokemonName: string, pokemonImgUrl: string, pokemonLife: ValueWithTotal) {
    const cardElt = Utils.createNewElement("div", 'pokemon-card', pokemonCards);
    PokemonDomUtils.createPokemonCardHeader(cardElt, pokemonImgUrl);
    PokemonDomUtils.createPokemonBody(cardElt, pokemonName, pokemonLife);
  }
}