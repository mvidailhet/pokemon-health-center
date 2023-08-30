import { IPokemon, ValueWithTotal, PokemonGender } from "./models/pokemon.js";
import { PokemonDomUtils, BodyElts } from "./pokemon-dom-utils.js";

export class Pokemon implements IPokemon {
  imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  level: number = 1;
  life: ValueWithTotal = {
    current: 25,
    total: 100,
  };

  cardElts?: BodyElts;

  constructor(
    readonly id: number,
    readonly gender: PokemonGender,
    readonly name: string,
    healthPercent: number
  ) {
    this.life.current = healthPercent;
    this.createHTMLElement();
  }

  createHTMLElement() {
    const pokemonCards = document.querySelector(
      ".pokemon-cards"
    )! as HTMLElement;
    this.cardElts = PokemonDomUtils.createPokemonCard(
      pokemonCards,
      this.name,
      this.imgUrl,
      this.life,
      this.heal.bind(this)
    );
  }

  heal() {
    if (!this.cardElts) return;
    this.life.current = this.life.total;
    this.changeHealElementstoFull(this.life.current);
  }

  private changeHealElementstoFull(newHealthValue: number) {
    if (!this.cardElts) return;
    this.cardElts.healthElts.healthBarElt.style.width = "100%";
    this.cardElts.healthElts.healthValueTextElt.textContent = newHealthValue.toString();
    PokemonDomUtils.changeHealthBarColorFromHealthPercent(100, this.cardElts.healthElts.healthBarElt);
  }
}
