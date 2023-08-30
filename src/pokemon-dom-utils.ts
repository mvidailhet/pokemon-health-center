import { Utils } from "./utils.js";
import { ValueWithTotal } from "./models/pokemon.js";

export interface HealthElts {
  healthValueTextElt: HTMLElement;
  healthBarElt: HTMLElement;
}

export interface BodyElts {
  healthElts: HealthElts;
  healButtonElt: HTMLElement;
}

const lifeColors = {
  low: "#ab3333",
  medium: "#d4ca38",
  high: "#4caf50"
};

export class PokemonDomUtils {
  private static createPokemonCardHeader(
    cardElt: HTMLElement,
    pokemonImgUrl: string
  ) {
    const header = Utils.createNewElement(
      "div",
      "pokemon-card-header",
      cardElt
    );
    const img = Utils.createNewElement("div", "pokemon-card-img", header);
    img.style.backgroundImage = `url("${pokemonImgUrl}")`;
  }

  private static createPokemonBody(
    cardElt: HTMLElement,
    pokemonName: string,
    pokemonLife: ValueWithTotal,
    healFunction: () => void
  ): BodyElts {
    const bodyElt = Utils.createNewElement("div", "pokemon-card-body", cardElt);
    Utils.createNewElement("h2", "pokemon-card-title", bodyElt, pokemonName);
    const healthElts = PokemonDomUtils.createPokemonHealthInfo(
      bodyElt,
      pokemonLife
    );
    const healButtonElt = PokemonDomUtils.createPokemonHealButton(bodyElt, healFunction);
    return {
      healthElts,
      healButtonElt,
    };
  }

  private static createPokemonHealthInfo(
    bodyElt: HTMLElement,
    pokemonLife: ValueWithTotal
  ): HealthElts {
    const healthTextElt = Utils.createNewElement(
      "p",
      "pokemon-card-text",
      bodyElt,
      `HP: `
    );
    const healthValueTextElt = Utils.createNewElement(
      "span",
      "pokemon-card-current-health-text",
      healthTextElt,
      pokemonLife.current.toString()
    );
    const healthbarContainer = Utils.createNewElement(
      "div",
      "pokemon-health-bar-container",
      bodyElt
    );
    const healthBarElt = Utils.createNewElement(
      "div",
      "pokemon-health-bar",
      healthbarContainer
    );
    const percent = (pokemonLife.current / pokemonLife.total) * 100;

    PokemonDomUtils.changeHealthBarColorFromHealthPercent(percent, healthBarElt);

    healthBarElt.style.width = `${percent}%`;
    return {
      healthValueTextElt,
      healthBarElt,
    };
  }

  static changeHealthBarColorFromHealthPercent(healthPercent: number, healthBarElt: HTMLElement) {
    if (healthPercent < 30) {
      healthBarElt.style.backgroundColor = lifeColors.low;
    } else if (healthPercent < 70) {
      healthBarElt.style.backgroundColor = lifeColors.medium; 
    } else {
      healthBarElt.style.backgroundColor = lifeColors.high; 
    }
  }

  private static createPokemonHealButton(bodyElt: HTMLElement, healFunction: () => void) {
    const button = Utils.createNewElement(
      "button",
      "button pokemon-card-button",
      bodyElt,
      "Heal"
    );

    button.addEventListener("click", healFunction, true);

    return button;
  }

  static createPokemonCard(
    pokemonCards: HTMLElement,
    pokemonName: string,
    pokemonImgUrl: string,
    pokemonLife: ValueWithTotal,
    healFunction: () => void,
  ): BodyElts {
    const cardElt = Utils.createNewElement("div", "pokemon-card", pokemonCards);
    PokemonDomUtils.createPokemonCardHeader(cardElt, pokemonImgUrl);
    const bodyElts = PokemonDomUtils.createPokemonBody(
      cardElt,
      pokemonName,
      pokemonLife,
      healFunction
    );
    return bodyElts;
  }
}
