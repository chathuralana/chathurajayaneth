const jsonUrl = 'page2.json'; // Replace with the path to your JSON file

function displayAnimalCards() {
  fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
      const animalCardsTitle = document.querySelector('.cards h1'); // Assuming your title is an h1 within ".cards"
      const animalCardElements = document.querySelectorAll('.col'); // Selects all animal card columns

      // Update title
      animalCardsTitle.textContent = data.animalCards.title;

      // Update individual animal cards
      animalCardElements.forEach((cardElement, index) => {
        const animalImage = cardElement.querySelector('img');
        const animalTitle = cardElement.querySelector('h4');
        const animalDescription = cardElement.querySelector('p');
        const animalLink = cardElement.querySelector('a');

        // Assuming your elements have the expected structure
        animalImage.src = data.animalCards.cards[index].image;
        animalTitle.textContent = data.animalCards.cards[index].title;
        animalDescription.textContent = data.animalCards.cards[index].description;
        animalLink.href = data.animalCards.cards[index].link;
      });
    })
    .catch(error => console.error('Error fetching animal cards data:', error));
}

displayAnimalCards(); // Call the function to display content
