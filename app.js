let vocabData = [];
let currentWord = null;
let questionCount = 1;
let isReverse = false;

// DOM Elements
const modeBadge = document.getElementById('mode-badge');
const voiceSelect = document.getElementById('voice-select');
const mainWordEl = document.getElementById('main-word');
const translatedWordEl = document.getElementById('translated-word');
const playAudioBtn = document.getElementById('play-audio-btn');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');

// --- Text-to-Speech Setup ---
let voices = [];
function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    
    // Filter to prioritize German and English voices
    const relevantVoices = voices.filter(v => v.lang.startsWith('de') || v.lang.startsWith('en'));
    
    if (relevantVoices.length === 0) {
        voiceSelect.innerHTML = '<option>Default Voice (No specific language detected)</option>';
        return;
    }

    relevantVoices.forEach((voice) => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
    
    // Auto-select a German voice by default if available
    const defaultDe = relevantVoices.findIndex(v => v.lang.startsWith('de'));
    if(defaultDe !== -1) voiceSelect.selectedIndex = defaultDe;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function playAudio(text, langPrefix) {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceName = voiceSelect.options[voiceSelect.selectedIndex]?.getAttribute('data-name');
    
    if (selectedVoiceName) {
        utterance.voice = voices.find(v => v.name === selectedVoiceName);
    }
    utterance.lang = langPrefix === 'de' ? 'de-DE' : 'en-US';
    speechSynthesis.speak(utterance);
}

// --- Data & Logic ---
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        vocabData = data;
        if(vocabData.length > 0) loadNextQuestion();
        else mainWordEl.textContent = "No data found!";
    })
    .catch(error => {
        console.error("Error loading data:", error);
        mainWordEl.textContent = "Error loading data.";
    });

function getWeightedRandomWord() {
    const uniqueDates = [...new Set(vocabData.map(item => item.date))].sort().reverse();
    const newestDate = uniqueDates[0];
    const secondNewestDate = uniqueDates.length > 1 ? uniqueDates[1] : newestDate;
    
    const newestWords = vocabData.filter(item => item.date === newestDate);
    const secondNewestWords = vocabData.filter(item => item.date === secondNewestDate && item.date !== newestDate);
    const olderWords = vocabData.filter(item => item.date !== newestDate && item.date !== secondNewestDate);

    const roll = Math.floor(Math.random() * 100) + 1;
    let selectedPool = [];

    if (roll <= 60 && newestWords.length > 0) selectedPool = newestWords;
    else if (roll <= 80 && secondNewestWords.length > 0) selectedPool = secondNewestWords;
    else if (olderWords.length > 0) selectedPool = olderWords;
    else selectedPool = vocabData; 

    const randomIndex = Math.floor(Math.random() * selectedPool.length);
    return selectedPool[randomIndex];
}

function loadNextQuestion() {
    currentWord = getWeightedRandomWord();
    isReverse = (questionCount % 4 === 0); // Reverse mode every 4th question

    if (isReverse) {
        modeBadge.innerHTML = "Mode: German &rarr; English";
        mainWordEl.textContent = currentWord.german;
        translatedWordEl.textContent = currentWord.english;
    } else {
        modeBadge.innerHTML = "Mode: English &rarr; German";
        mainWordEl.textContent = currentWord.english;
        translatedWordEl.textContent = currentWord.german;
    }

    // Reset UI for the new word
    translatedWordEl.classList.add('hidden');
    playAudioBtn.classList.add('hidden');
}

// --- Button Event Listeners ---
checkBtn.addEventListener('click', () => {
    translatedWordEl.classList.remove('hidden');
    playAudioBtn.classList.remove('hidden');
});

playAudioBtn.addEventListener('click', () => {
    // Determine which language to speak based on the current mode
    const textToSpeak = translatedWordEl.textContent;
    const lang = isReverse ? 'en' : 'de';
    playAudio(textToSpeak, lang);
});

nextBtn.addEventListener('click', () => {
    questionCount++;
    loadNextQuestion();
});
