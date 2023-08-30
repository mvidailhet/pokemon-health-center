export type PokemonGender = "male" | "female";

export interface ValueWithTotal {
  current: number;
  total: number;
}

export interface IPokemon {
  gender: PokemonGender;
  name: string;
  level: number;
  life: ValueWithTotal;
  imgUrl: string;
  lifePointsElt?: HTMLElement;
  lifeBarElt?: HTMLElement;
}

