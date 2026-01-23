function grabData(link='') {
  let d = fetch(`https://www.dnd5eapi.co${link}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
  return d;
}

function createCard(tag) {
  const cardContainer = document.querySelector(".card-container");
  console.log(cardContainer);
  const card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(tag);
  cardContainer.appendChild(card);
}

export { grabData, createCard };
