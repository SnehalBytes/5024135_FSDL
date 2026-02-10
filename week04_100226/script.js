const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "float"],
        answer: 0
    },
    {
        question: "Which symbol is used for strict equality?",
        options: ["==", "=", "===", "!="],
        answer: 2
    },
    {
        question: "Which method prints output in JavaScript?",
        options: ["print()", "console.log()", "echo()", "write()"],
        answer: 1
    },
    {
        question: "JavaScript is a ____ language.",
        options: ["Compiled", "Markup", "Interpreted", "Assembly"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.textContent = q.question;

    optionButtons.forEach((btn, index) => {
        btn.textContent = q.options[index];
        btn.className = "option";
        btn.disabled = false;
    });
}

function selectAnswer(index) {
    let correctAnswer = questions[currentQuestion].answer;

    if (index === correctAnswer) {
        optionButtons[index].classList.add("correct");
        score++;
    } else {
        optionButtons[index].classList.add("wrong");
        optionButtons[correctAnswer].classList.add("correct");
    }

    optionButtons.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
}

loadQuestion();
