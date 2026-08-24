let vocabData = [];
let currentIndex = 0;

const flashcard = document.getElementById('flashcard');
const germanEl = document.getElementById('german-word');
const englishEl = document.getElementById('english-word');
const progressEl = document.getElementById('progress-text');

// Fetch the vocabulary from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        vocabData = data;
        updateCard();
    })
    .catch(error => console.error("Error loading vocabulary:", error));

function updateCard() {
    if (vocabData.length === 0) return;
    const currentWord = vocabData[currentIndex];
    
    // Displays the Chapter/Section above the German word
    germanEl.innerHTML = `
        <small style="font-size: 14px; color: #888; display: block; margin-bottom: 10px;">
            ${currentWord.chapter} - Section ${currentWord.section}
        </small>
        <strong>${currentWord.german}</strong>
    `;
    englishEl.textContent = currentWord.english;
    
    // Always show front of card when moving to a new word
    flashcard.classList.remove('show-back');
    progressEl.textContent = `${currentIndex + 1} / ${vocabData.length}`;
}

// Event Listeners for clicks
flashcard.addEventListener('click', () => flashcard.classList.toggle('show-back'));
document.getElementById('flip-btn').addEventListener('click', () => flashcard.classList.toggle('show-back'));

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < vocabData.length - 1) {
        currentIndex++;
        updateCard();
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
});