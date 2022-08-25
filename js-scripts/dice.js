const diceButtons = document.querySelectorAll('[data-dice]');

diceButtons.forEach(button => {
  button.addEventListener('click', () => {
    rolarDado(button.innerText);
  });
});

function rolarDado(diceNumber) {
  let resultado;

  switch (diceNumber) {
    default:
      return;
    case 'D4':
      diceNumber = 4;
      resultado = Math.floor(Math.random() * diceNumber) + 1;
      document.getElementById('d4').innerText = resultado;
      break;
    case 'D6':
      diceNumber = 6;
      resultado = Math.floor(Math.random() * diceNumber) + 1;
      document.getElementById('d6').innerText = resultado;
      break;
    case 'D8':
      diceNumber = 8;
      resultado = Math.floor(Math.random() * diceNumber) + 1;
      document.getElementById('d8').innerText = resultado;
      break;
    case 'D10':
      diceNumber = 10;
      resultado = Math.floor(Math.random() * diceNumber) + 1;
      document.getElementById('d10').innerText = resultado;
      break;
    case 'D12':
      diceNumber = 12;
      resultado = Math.floor(Math.random() * diceNumber) + 1;
      document.getElementById('d12').innerText = resultado;
      break;
    case 'D20':
      diceNumber = 20;
      resultado = Math.floor(Math.random() * diceNumber) + 1;
      document.getElementById('d20').innerText = resultado;
      break;
    case 'D100':
      diceNumber = 100;
      resultado = Math.floor(Math.random() * diceNumber) + 1;
      document.getElementById('d100').innerText = resultado;
      break;
  }
  console.log(resultado);
}
