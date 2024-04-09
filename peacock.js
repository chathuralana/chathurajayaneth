async function getPeacockData() {
    try {
      const response = await fetch('peacock.json'); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      displayPeacockInfo(jsonData);
    } catch (error) {
      console.error('Error fetching peacock data:', error);
    }
  }
  
  function displayPeacockInfo(data) {
    const titleElement = document.querySelector('.pgtitle');
    titleElement.textContent = data.title;
  
    const paragraphElements = document.querySelectorAll('.para');
    paragraphElements.forEach((paragraph, index) => {
      paragraph.textContent = data.paragraphs[index].text;
    });
  }
  
  getPeacockData();
  