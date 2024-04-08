const questions = [
  {
    question: "What is the capital of France?",
    answer: [
      { text: "London", coorect: false },
      { text: "Rome", coorect: false },
      { text: "Paris", coorect: true },
      { text: "Berlin", coorect: false },
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answer: [
      { text: "Atlantic Ocean", coorect: false },
      { text: "Indian Ocean", coorect: false },
      { text: "Pacific Ocean", coorect: true },
      { text: "Arctic Ocean", coorect: false },
    ]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: [
      { text: "William Shakespeare", coorect: true },
      { text: "Charles Dickens", coorect: false },
      { text: "Jane Austen", coorect: false },
      { text: "Mark Twain", coorect: false },
    ]
  },
  {
    question: "What is the chemical symbol for water?",
    answer: [
      { text: "H2O", coorect: true },
      { text: "CO2", coorect: false },
      { text: "O2", coorect: false },
      { text: "NaCl", coorect: false },
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: [
      { text: "Earth", coorect: false },
      { text: "Mars", coorect: true },
      { text: "Venus", coorect: false },
      { text: "Jupiter", coorect: false },
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: [
      { text: "Pablo Picasso", coorect: false },
      { text: "Leonardo da Vinci", coorect: true },
      { text: "Vincent van Gogh", coorect: false },
      { text: "Michelangelo", coorect: false },
    ]
  },
  {
    question: "What is the currency of Japan?",
    answer: [
      { text: "Euro", coorect: false },
      { text: "Yen", coorect: true },
      { text: "Dollar", coorect: false },
      { text: "Pound", coorect: false },
    ]
  },
  {
    question: "Who is known as the father of modern physics?",
    answer: [
      { text: "Isaac Newton", coorect: false },
      { text: "Albert Einstein", coorect: true },
      { text: "Galileo Galilei", coorect: false },
      { text: "Niels Bohr", coorect: false },
    ]
  },
  {
    question: "Which mammal can fly?",
    answer: [
      { text: "Bat", coorect: true },
      { text: "Dolphin", coorect: false },
      { text: "Elephant", coorect: false },
      { text: "Lion", coorect: false },
    ]
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: [
      { text: "Mount Kilimanjaro", coorect: false },
      { text: "Mount Everest", coorect: true },
      { text: "Mount Fuji", coorect: false },
      { text: "Mount McKinley", coorect: false },
    ]
  },
  // Add more questions as needed...
];



const questionelelment = document.getElementById("question");
const answerelelment = document.getElementById("anser_option");
const nextbtn = document.getElementById("next_btn");

let cuurindex = 0;
let score = 0;

function startquiz() {
  cuurindex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  // handleAnswer(correct);
  showquestion();
}


function showquestion() {
  reset();
  let currquestion = questions[cuurindex];
  let questionno = cuurindex + 1;
  questionelelment.innerHTML = questionno + ". " + currquestion.question;


  currquestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btnn");
    answerelelment.appendChild(button);
    if (answer.coorect) {
      button.dataset.coorect = answer.coorect;
    }

    button.addEventListener("click", selectanswer);

  });
}

function reset() {
  nextbtn.style.display = "none";
  while (answerelelment.firstChild) {
    answerelelment.removeChild(answerelelment.firstChild);
  }

}


function selectanswer(e) {
  const selectbtn = e.target;
  const iscorrect = selectbtn.dataset.coorect === "true";

  if (iscorrect) {
    selectbtn.classList.add("corect");
    score++;
  }
  else {
    selectbtn.classList.add("incorect");
  }

  Array.from(answerelelment.children).forEach(button => {
    if (button.dataset.coorect === "true") {
      button.classList.add("corect")

    }
    button.disabled = true;
  });
  nextbtn.style.display = "block";
}


function showscore(){
  reset();
  questionelelment.innerHTML = `You scored ${score} out of ${questions.length} !`;
  nextbtn.innerHTML = "Play Again";
  nextbtn.style.display = "block";
}

function handelnextbutton()
{
  cuurindex++;
  if(cuurindex < questions.length){
    showquestion();
  }
  else{
    showscore();
  }
}

nextbtn.addEventListener("click", () => {
  if (cuurindex < questions.length) {
    handelnextbutton();
  }
  else {
    startquiz();
  }
});

startquiz();