type PokemonGender = "male" | "female";

interface ValueWithTotal {
  current: number;
  total: number;
}

interface IPokemon {
  gender: PokemonGender;
  name: string;
  level: number;
  life: ValueWithTotal;
  imgUrl: string;
  lifePointsElt?: HTMLElement;
  lifeBarElt?: HTMLElement;
}

export class Pokemon implements IPokemon {
  imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;

  constructor(
    readonly id: number,
    readonly gender: PokemonGender,
    readonly name: string,
  ) {}
  level: number = 1;
  life: ValueWithTotal = {
    current: 25,
    total: 25,
  };
  lifePointsElt?: HTMLElement | undefined;
  lifeBarElt?: HTMLElement | undefined;
}
