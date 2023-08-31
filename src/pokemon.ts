import { IPokemon, ValueWithTotal, PokemonGender } from "./models/pokemon.js";
import { PokemonDomUtils, BodyElts } from "./dom-utils/pokemon-dom-utils.js";
import { DOMUtils } from "./dom-utils/dom-utils.js";

export class Pokemon implements IPokemon {
  imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  level: number = 1;
  life: ValueWithTotal = {
    current: 25,
    total: 100,
  };

  cardElts?: BodyElts;

  cryAudio = new Audio(`https://pokemoncries.com/cries-old/${this.id}.mp3`);

  constructor(
    readonly id: number,
    readonly gender: PokemonGender,
    readonly name: string,
    healthPercent: number
  ) {
    this.life.current = healthPercent;
  }

  createHTMLElement(parentElt: HTMLElement) {
    this.cardElts = PokemonDomUtils.createPokemonCard(
      parentElt,
      this.name,
      this.imgUrl,
      this.life,
      this.gender,
      this.heal.bind(this)
    );
  }

  async heal(cryAfter = true) {
    if (!this.cardElts) return;
    if (this.life.current === this.life.total) return;
    await this.changeHealElementstoFull();
    this.life.current = this.life.total;
    if (cryAfter) this.cry();
  }

  cry() {
    this.cryAudio.play();
  }

  private async changeHealElementstoFull() {
    if (!this.cardElts) return;
    this.cardElts.healthElts.healthBarElt.style.width = "100%";
    PokemonDomUtils.changeHealthBarColorFromHealthPercent(
      100,
      this.cardElts.healthElts.healthBarElt
    );
    await this.animateHealthValue();
    return Promise.resolve();
  }

  private animateHealthValue() {
    if (!this.cardElts) return;
    return DOMUtils.animateValue(
      this.cardElts.healthElts.healthValueTextElt,
      this.life.current,
      this.life.total,
      1000
    );
  }
}
