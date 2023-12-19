type Pokemon = {
  id: number;
  name: string;
};

const cards = document.querySelector<HTMLElement>(".pokemon-cards");

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "Bulbi",
  },
  {
    id: 25,
    name: "Pika",
  },
  {
    id: 7,
    name: "Cara",
  },
  {
    id: 150,
    name: "Thierry",
  },
  {
    id: 149,
    name: "Roger",
  },
];

let pokemonsHealthBars: HTMLElement[] = [];

function createHTMLElement(elementName: string, className: string, parentElt: HTMLElement) {
  const element = document.createElement(elementName);
  element.classList.add(className);
  parentElt.appendChild(element);
  return element;
}

pokemons.forEach((pokemon) => {
  const healthBar = createCard(pokemon.name, pokemon.id);
  if (healthBar === undefined) {
    console.error('health bar element cannot be null');
    return;
  }
  pokemonsHealthBars.push(healthBar);
});

function createCard(title: string, id: number): HTMLElement | undefined {
  if (cards === null) {
    console.error("cards element should not be null");
    return;
  }

  const card = createHTMLElement("div", "pokemon-card", cards);

  const cardHeader = createHTMLElement("div", "pokemon-card-header", card);

  const cardImg = createHTMLElement("div", "pokemon-card-img", cardHeader);
  cardImg.style.backgroundImage = `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png")`;

  const cardBody = createHTMLElement("div", "pokemon-card-body", card);

  const cardTitle = createHTMLElement("h2", "pokemon-card-title", cardBody);
  cardTitle.textContent = title;

  const cardText = createHTMLElement("p", "pokemon-card-text", cardBody);
  cardText.textContent = 'HP: 100';

  const cardHealthBarContainer = createHTMLElement("div", "pokemon-health-bar-container", cardBody);

  const cardHealthBar = createHTMLElement("div", "pokemon-health-bar", cardHealthBarContainer);

  const cardBtn = createHTMLElement("button", "pokemon-card-button", cardBody);
  cardBtn.classList.add("button");
  cardBtn.textContent = 'Heal now';

  cardBtn.addEventListener('click', function() {
    cardHealthBar.style.width = '100%';
    setTimeout(() => {
      const audio = new Audio(`https://pokemoncries.com/cries-old/${ id }.mp3`);
      audio.play();
    }, 500);
  });

  return cardHealthBar;
}

const healAllButton = document.querySelector('.heal-all-button');

healAllButton?.addEventListener('click', function() {
  pokemonsHealthBars.forEach((healthBar) => {
    healthBar.style.width = '100%';
  });
});
