
fetch('yala.json')
  .then(response => response.json())
  .then(data => {
    // Update HTML content based on JSON data
    data.forEach(item => {
      if (item.section_id) {
        document.getElementById(item.section_id).innerHTML = item.content;
      } else if (item.header_id) {
        document.getElementById(item.header_id).innerHTML = item.content;
        document.getElementById(item.header_id).nextElementSibling.querySelector('img').src = item.image;
        document.getElementById(item.paragraph_id).innerHTML = item.content;
      } else if (item.image_sources) {
        const images = document.querySelectorAll('.images1 img');
        item.image_sources.forEach((src, index) => {
          images[index].src = src;
        });
      }
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
