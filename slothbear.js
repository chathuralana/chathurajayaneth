async function getSlothBearData() {
    try {
      const response = await fetch('slothbear.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      displaySlothBearInfo(jsonData);
    } catch (error) {
      console.error('Error fetching sloth bear data:', error);
    }
  }
  
  function displaySlothBearInfo(data) {
    const titleElement = document.querySelector('.pgtitle');
    titleElement.textContent = data.title;
  
    const paragraphElements = document.querySelectorAll('.para');
    paragraphElements.forEach((paragraph, index) => {
      paragraph.textContent = data.paragraphs[index].text;
    });
  }
  
  getSlothBearData();
  