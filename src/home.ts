const cards = document.querySelector('.pokemon-cards');

const pokemons = [
  {
    name: "Lucky",
    picture: "https://placekitten.com/200/287"
  },
  {
    name: "Symba",
    picture: "https://placekitten.com/200/139"
  },
  {
    name: "Léo",
    picture: "https://placekitten.com/200/90"
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194"
  },
  {
    name: "Charly",
    picture: "https://placekitten.com/200/179"
  }
];

createCard("Charly", "https://placekitten.com/200/179");

function createCard(title: string, imageUrl: string) {

  if (cards === null) {
    console.error('cards element should not be null');
    return;
  }

  // On crée un div avec la classe card
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  // On crée un div avec la classe card-header et on l'ajoute à la card
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  // On crée un div avec la classe card-img et on l'ajoute à la cardHeader
  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);
  
  
  /**
   * Étape 1: Créez la div cardBody, ajoutez la classe card-body et ajoutez-la à la carte
   */
  /**
   * Étape 2
   * Créez le h2 cardTitle, ajoutez la classe card-title,
   * définissez le texte à l'intérieur de la balise sur le paramètre "title" de cette fonction
   * et ajoutez-le à la cardBody
   */
  /**
   * Étape 3
   * Créez le bouton cardButton, ajoutez la classe card-button,
   * définissez le texte à l'intérieur de la balise sur "Adopt Now"
   * et ajoutez-le à la cardBody
   */
}