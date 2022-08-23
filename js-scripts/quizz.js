const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainerElements = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElements.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('button');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    button.disabled = 'disabled';
  });
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '3', correct: false },
      { text: '5', correct: false },
    ],
  },
  {
    question: 'What is 8 * 9?',
    answers: [
      { text: '72', correct: true },
      { text: '89', correct: false },
      { text: '81', correct: false },
      { text: '96', correct: false },
    ],
  },
  {
    question: 'What is 7 / 3?',
    answers: [
      { text: '2', correct: false },
      { text: '2.3', correct: true },
      { text: '3.5', correct: false },
      { text: '2.5', correct: false },
    ],
  },
  {
    question: 'What is 2 ** 4?',
    answers: [
      { text: '4', correct: false },
      { text: '22', correct: false },
      { text: '16', correct: true },
      { text: '8', correct: false },
    ],
  },
  {
    question: 'What is 755 + 22 - 2 * 7?',
    answers: [
      { text: '753', correct: false },
      { text: '5326', correct: false },
      { text: '763', correct: true },
      { text: '5425', correct: false },
    ],
  },
];
