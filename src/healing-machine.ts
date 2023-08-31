import { Pokemon } from "./pokemon.js";

export class HealingMachine {
  readonly nbMaxPokemons = 6;
  private pokemons: Pokemon[] = [];

  private readonly healAllButton = document.querySelector('#heal-all-button')!;

  constructor(pokemons?: Pokemon[]) {
    this.healAllButton.addEventListener("click", this.healAllPokemons.bind(this), true);
    if (pokemons) this.addPokemons(pokemons);
  }

  private readonly healSound = new Audio(
    "https://www.myinstants.com/media/sounds/111-pokemon-recovery.mp3"
  );

  addPokemon(pokemon: Pokemon) {
    if (this.pokemons.length >= this.nbMaxPokemons) {
      throw new Error("Heal Machine is already full");
    }
    this.pokemons.push(pokemon);
  }

  addPokemons(pokemons: Pokemon[]) {
    pokemons.forEach((pokemon) => this.addPokemon(pokemon));
  }

  healAllPokemons() {
    this.healSound.play();
    this.pokemons.forEach((pokemon) => pokemon.heal(false));
  }
}
