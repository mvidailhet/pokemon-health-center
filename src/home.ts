const cards = document.querySelector(".pokemon-cards");

const pokemons = [
  {
    name: "Lucky",
    picture: "https://placekitten.com/200/287",
  },
  {
    name: "Symba",
    picture: "https://placekitten.com/200/139",
  },
  {
    name: "Léo",
    picture: "https://placekitten.com/200/90",
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194",
  },
  {
    name: "Charly",
    picture: "https://placekitten.com/200/179",
  },
];

createCard(
  "Charly",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
);

function createCard(title: string, imageUrl: string) {
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
  cardImg.style.backgroundImage = `url(${imageUrl})`;
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
  });
}
