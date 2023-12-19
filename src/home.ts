type Pokemon = {
  id: number;
  name: string;
};

const cards = document.querySelector(".pokemon-cards");

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

let pokemonsHealthBars: HTMLDivElement[] = [];

pokemons.forEach((pokemon) => {
  const healthBar = createCard(pokemon.name, pokemon.id);
  if (healthBar === undefined) {
    console.error('health bar element cannot be null');
    return;
  }
  pokemonsHealthBars.push(healthBar);
});

function createCard(title: string, id: number): HTMLDivElement | undefined {
  if (cards === null) {
    console.error("cards element should not be null");
    return;
  }

  const card = document.createElement("div");
  card.classList.add("pokemon-card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("pokemon-card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png")`;
  cardImg.classList.add("pokemon-card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("pokemon-card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("pokemon-card-title");
  cardTitle.textContent = title;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement("p");
  cardText.classList.add("pokemon-card-text");
  cardText.textContent = 'HP: 100';
  cardBody.appendChild(cardText);

  const cardHealthBarContainer = document.createElement("div");
  cardHealthBarContainer.classList.add("pokemon-health-bar-container");
  cardBody.appendChild(cardHealthBarContainer);

  const cardHealthBar = document.createElement("div");
  cardHealthBar.classList.add("pokemon-health-bar");
  cardHealthBarContainer.appendChild(cardHealthBar);

  const cardBtn = document.createElement("button");
  cardBtn.classList.add("pokemon-card-button");
  cardBtn.classList.add("button");
  cardBtn.textContent = 'Heal now';
  cardBody.appendChild(cardBtn);

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
