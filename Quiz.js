const questions = [
    {
        question: "Which country is the largest by land area?",
        answers: [
            { text: "Russia", correct: true},
            { text: "China", correct: false},
            { text: "United States", correct: false},
            { text: "Brazil", correct: false},
        ]
    },
    {
        question: "Which country is considered the most powerful in terms of military strength?",
        answers: [
            { text: "United States", correct: true},
            { text: "Russia", correct: true},
            { text: "China", correct: false},
            { text: "Germany", correct: false},
        ]
    },
    {
        question: "Which country ranks highest in the Human Development Index (HDI)?",
        answers: [
            { text: "Norway", correct: true},
            { text: "Switzerland", correct: false},
            { text: "Australia", correct: false},
            { text: "Canada", correct: false},
        ]
    },
    {
        question: "Which country is known for having the largest population?",
        answers: [
            { text: "India", correct: false},
            { text: "United States", correct: false},
            { text: "China", correct: true},
            { text: "Brazil", correct: false},
        ]
    },
    {
        question: "Capital of France?",
        answers: [
            { text: "Paris", correct: true},
            { text: "Kuala Lumpur", correct: false},
            { text: "Madrid", correct: false},
            { text: "Cairo", correct: false},
        ]
    },
    {
        question: "Capital of UK?",
        answers: [
            { text: "Andorra la Vella", correct: false},
            { text: "London", correct: true},
            { text: "Kabul", correct: false},
            { text: "Algiers", correct: false},
        ]
    },
    {
        question: "Capital of USA?",
        answers: [
            { text: "Indonesia", correct: false},
            { text: "Washington D.C", correct: true},
            { text: "Abu Dhabi", correct: false},
            { text: "Vatican City", correct: false},
        ]
    },
    {
        question: "Capital of Russia?",
        answers: [
            { text: "Cornwall", correct: false},
            { text: "Bristol", correct: false},
            { text: "Moscow", correct: true},
            { text: "Leeds", correct: false},
        ]
    },
    {
        question: "Main Religion of Palestine in 1920s?",
        answers: [
            { text: "Islam", correct: true},
            { text: "Chistianity", correct: false},
            { text: "Juedism", correct: false},
            { text: "Zionism", correct: false},
        ]
    },
    {
        question: "Capital Of Australia?",
        answers: [
            { text: "Canberra", correct: true},
            { text: "Bourmemouth", correct: false},
            { text: "Nottingham", correct: false},
            { text: "Plymouth", correct: false},
        ]
    },
    {
        question: "Capital Of India?",
        answers: [
            { text: "New Delhi", correct: true},
            { text: "Bourmemouth", correct: false},
            { text: "Nottingham", correct: false},
            { text: "Sheffield", correct: false},
        ]
    },
    {
        question: "Richest Country?",
        answers: [
            { text: "UK", correct: false},
            { text: "U.S.A", correct: true},
            { text: "China", correct: false},
            { text: "Russia", correct: false},
        ]
    },
    {
        question: "Precise population of the world in 2024?",
        answers: [
            { text: "10B", correct: false},
            { text: "6.7B", correct: false},
            { text: "8B", correct: false},
            { text: "7.8B", correct: true},
        ]
    },
    {
        question: "Smallest Country?",
        answers: [
            { text: "Bahrain", correct: false},
            { text: "Vatican City", correct: true},
            { text: "Monaco", correct: false},
            { text: "Nauru", correct: false},
        ]
    },
    {
        question: "Capital of South Africa?",
        answers: [
            { text: "Cape Town", correct: true},
            { text: "Kinshasa", correct: false},
            { text: "Brighton", correct: false},
            { text: "Lyme Regis", correct: false},
        ]
    },
    {
        question: "Capital of Japan in 1942?",
        answers: [
            { text: "Nagoya", correct: false},
            { text: "Kyoto", correct: false},
            { text: "Harrogate", correct: false},
            { text: "Tokyo", correct: true},
        ]
    },
    {
        question: "Capital of Pakistan?",
        answers: [
            { text: "Faisalabad", correct: false},
            { text: "Islamabad", correct: true},
            { text: "Multan", correct: false},
            { text: "Lahore", correct: false},
        ]
    },
    {
        question: "Capital of Algeria?",
        answers: [
            { text: "Sidi be Abbes", correct: false},
            { text: "Oran", correct: false},
            { text: "Algiers", correct: true},
            { text: "Coach Constantine", correct: false},
        ]
    },
    {
        question: "Capital of Bangladesh?",
        answers: [
            { text: "Dhaka", correct: true},
            { text: "Sylhet", correct: false},
            { text: "Khulna", correct: false},
            { text: "Rangpur", correct: false},
        ]
    },
    {
        question: "Enemy of North Korea?",
        answers: [
            { text: "Everyone", correct: false},
            { text: "Korea", correct: false},
            { text: "South Korea", correct: true},
            { text: "None", correct: false},
        ]
    },
    {
        question: "Capital of North Korea?",
        answers: [
            { text: "Wonsan", correct: false},
            { text: "Nampo", correct: false},
            { text: "Hamhung", correct: false},
            { text: "PyongYang", correct: true},
        ]
    },
    {
        question: "Where is EU headquarters?",
        answers: [
            { text: "Coventry", correct: false},
            { text: "Chester", correct: false},
            { text: "Belgium", correct: true},
            { text: "Brussels", correct: true},
        ]
    },
    {
        question: "Capital of Morroco?",
        answers: [
            { text: "Rabat", correct: true},
            { text: "Exeter", correct: false},
            { text: "Anglesey", correct: false},
            { text: "Keswick", correct: false},
        ]
    },
    {
        question: "Nuclear Nations",
        answers: [
            { text: "UK", correct: true},
            { text: "North Korea", correct: true},
            { text: "India", correct: true},
            { text: "Pakistan", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        };
        button.addEventListener("click", selectAnswer);
    });
};

function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    };
};

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    };
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    };
};

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    };
});

startQuiz();