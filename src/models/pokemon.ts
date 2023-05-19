type PokemonGender = "male" | "female";
type PokemonType = "normal";

interface ValueWithTotal {
  current: number;
  total: number;
}

interface Pokemon {
  id: number;
  gender: PokemonGender;
  name: string;
  level: number;
  life: ValueWithTotal;
  lifePointsElt?: HTMLElement;
  lifeBarElt?: HTMLElement;
}