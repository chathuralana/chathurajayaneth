// Fetching data from JSON file
fetch('department.json')
  .then(response => response.json())
  .then(data => {
    // Updating each section with the corresponding content from the JSON data
    data.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        element.textContent = item.content;
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));
