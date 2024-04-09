async function getSlenderLorisData() {
    try {
      const response = await fetch('leopard.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      displaySlenderLorisInfo(jsonData);
    } catch (error) {
      console.error('Error fetching slender loris data:', error);
    }
  }
  
  function displaySlenderLorisInfo(data) {
    const titleElement = document.querySelector('.pgtitle');
    titleElement.textContent = data.title;
  
    const paragraphElements = document.querySelectorAll('.para');
    paragraphElements.forEach((paragraph, index) => {
      paragraph.textContent = data.paragraphs[index].text;
    });
  }
  
  getSlenderLorisData();
  