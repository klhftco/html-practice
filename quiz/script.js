const quizData = [
  {
    question: 'How old is Berkeley?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c'
  }, {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javascript',
    correct: 'a'
  }, {
    question: 'Who is the POTUS?',
    a: 'Pop',
    b: 'Saldano',
    c: 'Andrei',
    d: 'Trump',
    correct: 'd'
  }, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'CSS',
    c: 'JSON',
    d: 'Helicopter Terminal Motorboat Lamborgini',
    correct: 'a'
  }, {
    question: 'What year was JS released?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None',
    correct: 'b'
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitButton.addEventListener('click', () => {
  const answer = getSelected();

  if(answer) {
    if (answer === currentQuestion.correct) {
      score++;
    }

    currentQuestion++;
    if(currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }

})
