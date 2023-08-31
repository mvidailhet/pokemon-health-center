import { DOMUtils } from "./dom-utils.js";
import { PokemonGender, ValueWithTotal } from "../models/pokemon.js";

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
    const header = DOMUtils.createHTMLElement(
      "div",
      "pokemon-card-header",
      cardElt
    );
    const img = DOMUtils.createHTMLElement("div", "pokemon-card-img", header);
    img.style.backgroundImage = `url("${pokemonImgUrl}")`;
  }

  private static createPokemonBody(
    cardElt: HTMLElement,
    pokemonName: string,
    pokemonLife: ValueWithTotal,
    pokemonGender: PokemonGender,
    healFunction: () => void
  ): BodyElts {
    const bodyElt = DOMUtils.createHTMLElement("div", "pokemon-card-body", cardElt);
    const titleElt = DOMUtils.createHTMLElement("h2", "pokemon-card-title", bodyElt, pokemonName);
    const genderElt = PokemonDomUtils.createGenderSVG(pokemonGender === 'male');
    titleElt.append(genderElt);
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
    const healthTextElt = DOMUtils.createHTMLElement(
      "p",
      "pokemon-card-text",
      bodyElt,
      `HP: `
    );
    const healthValueTextElt = DOMUtils.createHTMLElement(
      "span",
      "pokemon-card-current-health-text",
      healthTextElt,
      pokemonLife.current.toString()
    );
    const healthbarContainer = DOMUtils.createHTMLElement(
      "div",
      "pokemon-health-bar-container",
      bodyElt
    );
    const healthBarElt = DOMUtils.createHTMLElement(
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
    const button = DOMUtils.createHTMLElement(
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
    pokemonGender: PokemonGender,
    healFunction: () => void,
  ): BodyElts {
    const cardElt = DOMUtils.createHTMLElement("div", "pokemon-card", pokemonCards);
    PokemonDomUtils.createPokemonCardHeader(cardElt, pokemonImgUrl);
    const bodyElts = PokemonDomUtils.createPokemonBody(
      cardElt,
      pokemonName,
      pokemonLife,
      pokemonGender,
      healFunction
    );
    return bodyElts;
  }

  static createGenderSVG(isMale: boolean = true) {
    const svgElt = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElt.classList.add("pokemon-gender");
    svgElt.classList.add(
      isMale ? "pokemon-gender-male" : "pokemon-gender-female"
    );
    svgElt.setAttribute("width", "24");
    svgElt.setAttribute("height", "24");
    svgElt.setAttribute("viewBox", "0 0 24 24");
  
    const pathElt = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    if (isMale) {
      pathElt.setAttribute(
        "d",
        "M21 9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.632 3.501 8.443 8 8.941v2.059h-3v2h3v2h2v-2h3v-2h-3v-2.059c4.499-.498 8-4.309 8-8.941zm-16 0c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7z"
      );
    } else {
      pathElt.setAttribute(
        "d",
        "M16 2v2h3.586l-3.972 3.972c-1.54-1.231-3.489-1.972-5.614-1.972-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.125-.741-4.074-1.972-5.614l3.972-3.972v3.586h2v-7h-7zm-6 20c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"
      );
    }
  
    svgElt.appendChild(pathElt);
    return svgElt;
  }
}
