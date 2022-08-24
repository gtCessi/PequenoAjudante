const infoButton = document.querySelector('.infoBtn');
const infoDiv = document.querySelector('.infoDiv');

if (infoButton) {
  infoButton.addEventListener('click', () => {
    if (infoDiv.style.display === 'none') {
      infoDiv.style.display = 'block';
    } else {
      infoDiv.style.display = 'none';
    }
  });
}
