const questions = [
    "Apa yang kamu ketahui tentang OMK?",
    "Menurut pandanganmu siapa yang cocok menjadi calon pengurus OMK Kronggahan?",
    "Mengapa kamu memilih orang tersebut?",
    "Jika kamu terpilih menjadi calon pengurus OMK, apakah kamu siap?"
];

let currentQuestion = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const inputContainer = document.getElementById('input-container');
const nextButton = document.getElementById('next-button');
const thankYouMessage = document.getElementById('thank-you');
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

function showQuestion() {
    questionElement.innerText = questions[currentQuestion];
    inputContainer.innerHTML = '';

    if (currentQuestion < 3) {
        inputContainer.innerHTML = '<textarea></textarea>';
        nextButton.classList.remove('hidden');
    } else {
        inputContainer.innerHTML = `
            <button id="ready-button">Siap</button>
            <button id="not-ready-button">Tidak</button>
        `;
        nextButton.classList.add('hidden');
        document.getElementById('not-ready-button').addEventListener('click', moveButton);
        document.getElementById('ready-button').addEventListener('click', showThankYou);
    }
}

function moveButton() {
    const button = document.getElementById('not-ready-button');
    const randomX = Math.random() * 80; // Random position
    const randomY = Math.random() * 80; // Random position
    button.style.position = 'absolute';
    button.style.left = `${randomX}vw`;
    button.style.top = `${randomY}vh`;
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showThankYou();
    }
});

function showThankYou() {
    question
