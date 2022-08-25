// Criando as funcoes da calculadora
class Calculator {
  constructor(prevNumberText, currentNumberText) {
    this.prevNumberText = prevNumberText;
    this.currentNumberText = currentNumberText;
    this.clear(); // limpar a tela sempre que inicializar
  }

  // metodo para limpar a tela
  clear() {
    this.currentNumber = '';
    this.prevNumber = '';
    this.operation = undefined;
  }

  // apagando 1 caracter
  delete() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
  }

  // adicionando numero
  appendNumber(number) {
    if (number === '.' && this.currentNumber.includes('.')) return;

    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  /* escolher a operacao a ser usada
  Se operacao for vazio (''), retorna, impedindo de inserir um caracter vazio
  Se nao for, chama compute() para calcular 
  Ao chamar, numero antes passa a ser igual ao numero atual 
  e numero atual fica vazio (aguardando input do usuario)
  */
  chooseOperation(operation) {
    if (this.currentNumber === '') return;
    if (this.prevNumber !== '') {
      this.compute();
    }

    this.operation = operation;
    this.prevNumber = this.currentNumber;
    this.currentNumber = '';
  }

  /* calcula a operacao matematica 
  Os dados recebidos chegam como string, por isso, se faz necessario
  transforma-los em numero (parseFloat) para prosseguir com o calculo
  */
  compute() {
    let computation;
    const prev = parseFloat(this.prevNumber);
    const current = parseFloat(this.currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '/':
        computation = prev / current;
        break;
      case 'x':
        computation = prev * current;
        break;
      case '**':
        computation = prev ** current;
        break;
      case '÷':
        computation = prev % current;
        break;
      default:
        return;
    }

    this.currentNumber = computation;
    this.operation = undefined;
    this.prevNumber = '';
  }

  // aqui, voltamos a trabalhar com string para mostrar os numeros na calculadora
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  // atualiza o display da calculadora
  updateDisplay() {
    this.currentNumberText.innerText = this.getDisplayNumber(
      this.currentNumber
    );

    if (this.operation != null) {
      this.prevNumberText.innerText = `${this.getDisplayNumber(
        this.prevNumber
      )} 
                        ${this.operation}`;
    } else {
      this.prevNumberText.innerText = '';
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearAllButton = document.querySelector('[data-clear-all]');
const deleteButton = document.querySelector('[data-delete');
const prevNumberText = document.querySelector('[data-prev-number]');
const currentNumberText = document.querySelector('[data-current-number]');

const calculadora = new Calculator(prevNumberText, currentNumberText);

// Funcionalidades dos botoes

/*forEach() para number e operation pois sao mais de 1 botao 
assim sendo, forEach() itera em cada item da array dos botoes/operadores
*/
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculadora.appendNumber(button.innerText);
    calculadora.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculadora.chooseOperation(button.innerText);
    calculadora.updateDisplay();
  });
});

//sem forEach() pois e um botao so
equalsButton.addEventListener('click', button => {
  calculadora.compute();
  calculadora.updateDisplay();
});

deleteButton.addEventListener('click', button => {
  calculadora.delete();
  calculadora.updateDisplay();
});

clearAllButton.addEventListener('click', button => {
  calculadora.clear();
  calculadora.updateDisplay();
});
