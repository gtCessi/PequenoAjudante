// Criando um novo item na lista
function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('taskInput').value;
  let task = document.createTextNode(inputValue);
  li.appendChild(task);

  if (inputValue === '') {
    alert('Digite alguma tarefa.');
  } else {
    document.getElementById('taskUL').appendChild(li);
  }
  document.getElementById('taskInput').value = '';

  let span = document.createElement('span');
  let text = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(text);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = 'none';
    };
  }
}

//adicionando botao para fechar em cada item
const nodeList = document.getElementsByTagName('li');
for (let i = 0; i < nodeList.length; i++) {
  let span = document.createElement('span');
  let text = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(text);
  nodeList[i].appendChild(span);
}

// efetivando o butao para apagar os items da lista
const close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = 'none';
  };
}

// riscando os itens da lista
let list = document.querySelector('ul');
list.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      // tem que estar em maiusculo, se nao quebra (nao entendi o motivo)
      ev.target.classList.toggle('checked');
    }
  },
  false
);
