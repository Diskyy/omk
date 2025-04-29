const questions = [
    "Apa yang kamu ketahui tentang OMK?",
    "Menurut pandanganmu siapa yang cocok menjadi calon pengurus OMK Kronggahan?",
    "Mengapa kamu memilih orang tersebut?",
    "Jika kamu terpilih menjadi calon pengurus OMK, apakah kamu siap?"
];

let currentQuestion = 0;

const intro = document.getElementById('intro');
const formContainer = document.getElementById('form-container');
const questionElement = document.getElementById('question');
const inputContainer = document.getElementById('input-container');
const nextButton = document.getElementById('next-button');
const thankYouMessage = document.getElementById('thank-you');
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

document.getElementById('start-button').addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
musicToggle.addEventListener('click', toggleMusic);

function startQuiz() {
    intro.classList.add('hidden');
    formContainer.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    questionElement.textContent = questions[currentQuestion];
    inputContainer.innerHTML = ''; // Clear previous input

    if (currentQuestion < 3) {
        inputContainer.innerHTML = '<textarea></textarea>';
        nextButton.classList.remove('hidden');
    } else {
        // Question 4
        inputContainer.innerHTML = `
            <button id="ready-button">Siap</button>
            <button id="not-ready-button">Tidak</button>
        `;
        nextButton.classList.add('hidden');
        document.getElementById('not-ready-button').addEventListener('click', moveButton);
        document.getElementById('ready-button').addEventListener('click', showThankYou);
    }

    document.querySelector('.question-card').classList.add('show');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        formContainer.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
    }
}

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        backgroundMusic.muted = false;
        musicToggle.textContent = '🔇'; // Change icon to mute
    } else {
        backgroundMusic.pause();
        musicToggle.textContent = '🔊'; // Change icon to unmute
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

function showThankYou() {
    formContainer.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');
}
