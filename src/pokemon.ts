import { IPokemon, ValueWithTotal, PokemonGender } from './models/pokemon.js'; 
import { PokemonDomUtils } from './pokemon-dom-utils.js'; 

export class Pokemon implements IPokemon {
  imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  level: number = 1;
  life: ValueWithTotal = {
    current: 25,
    total: 100,
  };
  lifePointsElt?: HTMLElement | undefined;
  lifeBarElt?: HTMLElement | undefined;

  constructor(
    readonly id: number,
    readonly gender: PokemonGender,
    readonly name: string,
  ) {
    this.createHTMLElement();
  }

  createHTMLElement() {
    const pokemonCards = document.querySelector(".pokemon-cards")! as HTMLElement;
    PokemonDomUtils.createPokemonCard(pokemonCards, this.name, this.imgUrl, this.life);
  }
}