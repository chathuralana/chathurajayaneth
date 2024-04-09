// Fetch the JSON data
fetch('animals.json')
    .then(response => response.json())
    .then(data => {
        // Select the container where the cards will be appended
        const container = document.querySelector('.cards');

        // Loop through the data and create card elements
        data.forEach(animal => {
            // Create card element
            const card = document.createElement('div');
            card.classList.add('card');

            // Create image element
            const image = document.createElement('img');
            image.src = animal.image;
            card.appendChild(image);

            // Create card content element
            const cardContent = document.createElement('div');
            cardContent.classList.add('cardcontent');

            // Create title element
            const title = document.createElement('h2');
            title.textContent = animal.title;
            cardContent.appendChild(title);

            // Create description element
            const description = document.createElement('p');
            description.textContent = animal.description;
            cardContent.appendChild(description);

            // Create link element
            const link = document.createElement('a');
            link.href = animal.link;
            link.textContent = 'Read More';
            link.classList.add('button');
            cardContent.appendChild(link);

            // Append card content to card element
            card.appendChild(cardContent);

            // Append card to the container
            container.appendChild(card);
        });
    })
    .catch(error => console.log(error));
