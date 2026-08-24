let vocabData = [];
let currentWord = null;
let questionCount = 1;
let isReverse = false;

// DOM Elements
const questionCounterEl = document.getElementById('question-counter');
const instructionTextEl = document.getElementById('instruction-text');
const questionWordEl = document.getElementById('question-word');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackArea = document.getElementById('feedback-area');
const correctAnswerEl = document.getElementById('correct-answer');

// Load Data
fetch('data.json')
    .then(response => response.json())
    .then(data => { 
        vocabData = data; 
        if(vocabData.length > 0) loadNextQuestion();
        else questionWordEl.textContent = "No data found!";
    })
    .catch(error => console.error("Error loading data:", error));

function getWeightedRandomWord() {
    // 1. Group dates and find the newest, second newest, and older
    const uniqueDates = [...new Set(vocabData.map(item => item.date))].sort().reverse();
    
    const newestDate = uniqueDates[0];
    const secondNewestDate = uniqueDates.length > 1 ? uniqueDates[1] : newestDate;
    
    const newestWords = vocabData.filter(item => item.date === newestDate);
    const secondNewestWords = vocabData.filter(item => item.date === secondNewestDate && item.date !== newestDate);
    const olderWords = vocabData.filter(item => item.date !== newestDate && item.date !== secondNewestDate);

    // 2. Roll a number between 1 and 100
    const roll = Math.floor(Math.random() * 100) + 1;
    let selectedPool = [];

    // 3. Apply the 60% / 20% / 20% logic
    if (roll <= 60 && newestWords.length > 0) {
        selectedPool = newestWords;
    } else if (roll <= 80 && secondNewestWords.length > 0) {
        selectedPool = secondNewestWords;
    } else if (olderWords.length > 0) {
        selectedPool = olderWords;
    } else {
        selectedPool = vocabData; 
    }

    // 4. Pick a random word from the selected pool
    const randomIndex = Math.floor(Math.random() * selectedPool.length);
    return selectedPool[randomIndex];
}

function loadNextQuestion() {
    currentWord = getWeightedRandomWord();
    
    // Every 4th question is a reverse question (German to English)
    isReverse = (questionCount % 4 === 0);

    questionCounterEl.textContent = `Question ${questionCount}`;
    
    if (isReverse) {
        instructionTextEl.textContent = "Translate to English:";
        questionWordEl.textContent = currentWord.german;
    } else {
        instructionTextEl.textContent = "Translate to German (include article if noun):";
        questionWordEl.textContent = currentWord.english;
    }

    // Reset UI
    feedbackArea.classList.add('hidden');
    checkBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
}

// Check Button Logic
checkBtn.addEventListener('click', () => {
    checkBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    feedbackArea.classList.remove('hidden');

    if (isReverse) {
        correctAnswerEl.textContent = currentWord.english;
    } else {
        correctAnswerEl.textContent = currentWord.german;
    }
});

// Next Button Logic
nextBtn.addEventListener('click', () => {
    questionCount++;
    loadNextQuestion();
});
