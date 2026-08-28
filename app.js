// Complete Database Hardcoded to prevent local testing errors
const vocabData = [
  { "german": "Bulgarisch", "english": "Bulgarian", "date": "2026-08-21" },
  { "german": "Deutsch", "english": "German", "date": "2026-08-21" },
  { "german": "Englisch", "english": "English", "date": "2026-08-21" },
  { "german": "gut", "english": "good", "date": "2026-08-21" },
  { "german": "guten Tag", "english": "Good day! Hello!", "date": "2026-08-21" },
  { "german": "Indonesisch", "english": "Indonesian", "date": "2026-08-21" },
  { "german": "international", "english": "international", "date": "2026-08-21" },
  { "german": "Italienisch", "english": "Italian", "date": "2026-08-21" },
  { "german": "Japanisch", "english": "Japanese", "date": "2026-08-21" },
  { "german": "Russisch", "english": "Russian", "date": "2026-08-21" },
  { "german": "Serbisch", "english": "Serbian", "date": "2026-08-21" },
  { "german": "Sie", "english": "you (formal)", "date": "2026-08-21" },
  { "german": "Türkisch", "english": "Turkish", "date": "2026-08-21" },
  { "german": "Ungarisch", "english": "Hungarian", "date": "2026-08-21" },
  { "german": "was", "english": "what?", "date": "2026-08-21" },
  { "german": "zuordnen", "english": "to assign, to match", "date": "2026-08-21" },
  { "german": "zusammengehören", "english": "to fit together", "date": "2026-08-21" },
  { "german": "die Autobahn, -en", "english": "highway", "date": "2026-08-21" },
  { "german": "das Butterbrot, -e", "english": "sandwich", "date": "2026-08-21" },
  { "german": "die Flasche, -n", "english": "bottle", "date": "2026-08-21" },
  { "german": "das Handtuch, \"-er", "english": "towel", "date": "2026-08-21" },
  { "german": "der Kindergarten, \"-", "english": "kindergarten", "date": "2026-08-21" },
  { "german": "der Koffer, -", "english": "suitcase", "date": "2026-08-21" },
  { "german": "der/die Kranke, -n", "english": "sick person", "date": "2026-08-21" },
  { "german": "die Nudel, -n", "english": "noodle", "date": "2026-08-21" },
  { "german": "das Würstchen, -", "english": "sausage", "date": "2026-08-21" },
  { "german": "das Würstel, -", "english": "sausage", "date": "2026-08-21" },
  { "german": "auf", "english": "in", "date": "2026-08-21" },
  { "german": "heißen", "english": "to be called", "date": "2026-08-21" },
  { "german": "Ihr, Ihre", "english": "your", "date": "2026-08-21" },
  { "german": "in", "english": "in", "date": "2026-08-21" },
  { "german": "Spanisch", "english": "Spanish", "date": "2026-08-21" },
  { "german": "die Sprache, -n", "english": "language", "date": "2026-08-21" },
  { "german": "wie", "english": "what", "date": "2026-08-21" },
  { "german": "das Wort, \"-er", "english": "word", "date": "2026-08-21" },
  { "german": "andere, anderer", "english": "other", "date": "2026-08-21" },
  { "german": "deutsch", "english": "German", "date": "2026-08-22" },
  { "german": "ein, eine", "english": "a", "date": "2026-08-22" },
  { "german": "kennen", "english": "to know", "date": "2026-08-22" },
  { "german": "das Kursplakat, -e", "english": "course poster", "date": "2026-08-22" },
  { "german": "machen", "english": "to make", "date": "2026-08-22" },
  { "german": "sammeln", "english": "to collect", "date": "2026-08-22" },
  { "german": "und", "english": "and", "date": "2026-08-22" },
  { "german": "auch", "english": "also", "date": "2026-08-22" },
  { "german": "bis bald", "english": "see you soon", "date": "2026-08-22" },
  { "german": "ciao", "english": "bye", "date": "2026-08-22" },
  { "german": "danke", "english": "thank you", "date": "2026-08-22" },
  { "german": "die", "english": "the", "date": "2026-08-22" },
  { "german": "dir", "english": "you (dat.)", "date": "2026-08-22" },
  { "german": "du", "english": "you", "date": "2026-08-22" },
  { "german": "die Entschuldigung, -en", "english": "to be sorry", "date": "2026-08-22" },
  { "german": "ganz", "english": "pretty", "date": "2026-08-22" },
  { "german": "gehen", "english": "to go", "date": "2026-08-22" },
  { "german": "gut", "english": "good", "date": "2026-08-22" },
  { "german": "hallo", "english": "hello", "date": "2026-08-22" },
  { "german": "hören", "english": "to hear", "date": "2026-08-22" },
  { "german": "ich", "english": "I", "date": "2026-08-22" },
  { "german": "lesen", "english": "to read", "date": "2026-08-22" },
  { "german": "die Person, -en", "english": "person", "date": "2026-08-22" },
  { "german": "sehr", "english": "very", "date": "2026-08-22" },
  { "german": "sein", "english": "to be", "date": "2026-08-22" },
  { "german": "tschüs", "english": "bye", "date": "2026-08-22" },
  { "german": "wer", "english": "who?", "date": "2026-08-22" },
  { "german": "die Situation, -en", "english": "situation", "date": "2026-08-22" },
  { "german": "spielen", "english": "to play", "date": "2026-08-22" },
  { "german": "bekannt", "english": "well-known", "date": "2026-08-22" },
  { "german": "der Name, -n", "english": "name", "date": "2026-08-22" },
  { "german": "oder", "english": "or", "date": "2026-08-22" },
  { "german": "auf Wiedersehen", "english": "goodbye", "date": "2026-08-22" },
  { "german": "das", "english": "this", "date": "2026-08-22" },
  { "german": "es", "english": "it", "date": "2026-08-22" },
  { "german": "Frau", "english": "Miss, Mrs, Ms", "date": "2026-08-22" },
  { "german": "gute Nacht", "english": "good night", "date": "2026-08-22" },
  { "german": "guten Abend", "english": "good evening", "date": "2026-08-22" },
  { "german": "guten Morgen", "english": "good morning", "date": "2026-08-23" },
  { "german": "Herr", "english": "Mr", "date": "2026-08-23" },
  { "german": "Ihnen", "english": "you (formal, dat.)", "date": "2026-08-23" },
  { "german": "mein, meine", "english": "my", "date": "2026-08-23" },
  { "german": "formell", "english": "formal", "date": "2026-08-23" },
  { "german": "informell", "english": "informal", "date": "2026-08-23" },
  { "german": "der Nachname, -n", "english": "last name", "date": "2026-08-23" },
  { "german": "das Personalpronomen, -", "english": "personal pronoun", "date": "2026-08-23" },
  { "german": "das Verb, -en", "english": "verb", "date": "2026-08-23" },
  { "german": "der Vorname, -n", "english": "first name", "date": "2026-08-23" },
  { "german": "die Antwort, -en", "english": "answer", "date": "2026-08-23" },
  { "german": "aus", "english": "from", "date": "2026-08-23" },
  { "german": "Deutschland", "english": "Germany", "date": "2026-08-23" },
  { "german": "in", "english": "in", "date": "2026-08-23" },
  { "german": "kommen", "english": "to come from", "date": "2026-08-23" },
  { "german": "der Reiseführer, -", "english": "travel guide (m)", "date": "2026-08-23" },
  { "german": "die Reiseführerin, -nen", "english": "travel guide (f)", "date": "2026-08-23" },
  { "german": "sprechen", "english": "to speak", "date": "2026-08-23" },
  { "german": "das Telefon, -e", "english": "telephone", "date": "2026-08-23" },
  { "german": "welche, welcher", "english": "which", "date": "2026-08-23" },
  { "german": "wo", "english": "where", "date": "2026-08-23" },
  { "german": "woher", "english": "from where", "date": "2026-08-23" },
  { "german": "wohnen", "english": "to live", "date": "2026-08-23" },
  { "german": "der Aussagesatz, \"-e", "english": "declarative sentence", "date": "2026-08-23" },
  { "german": "den", "english": "the", "date": "2026-08-23" },
  { "german": "das Interview, -s", "english": "interview", "date": "2026-08-23" },
  { "german": "variieren", "english": "to vary", "date": "2026-08-23" },
  { "german": "die W-Frage, -n", "english": "w-question", "date": "2026-08-23" },
  { "german": "er", "english": "he", "date": "2026-08-23" },
  { "german": "ergänzen", "english": "to complete", "date": "2026-08-23" },
  { "german": "sie", "english": "she", "date": "2026-08-23" },
  { "german": "notieren", "english": "to note", "date": "2026-08-23" },
  { "german": "wie", "english": "like", "date": "2026-08-23" },
  { "german": "zwei", "english": "two", "date": "2026-08-23" },
  { "german": "der Partner, -", "english": "partner (m)", "date": "2026-08-23" },
  { "german": "die Partnerin, -nen", "english": "partner (f)", "date": "2026-08-23" },
  { "german": "raten", "english": "to guess", "date": "2026-08-23" },
  { "german": "vorstellen", "english": "to introduce", "date": "2026-08-23" },
  { "german": "acht", "english": "eight", "date": "2026-08-23" },
  { "german": "achtzehn", "english": "eighteen", "date": "2026-08-23" },
  { "german": "der Buchstabe, -n", "english": "letter", "date": "2026-08-23" },
  { "german": "dann", "english": "then", "date": "2026-08-23" },
  { "german": "drei", "english": "three", "date": "2026-08-23" },
  { "german": "dreizehn", "english": "thirteen", "date": "2026-08-24" },
  { "german": "eins", "english": "one", "date": "2026-08-24" },
  { "german": "elf", "english": "eleven", "date": "2026-08-24" },
  { "german": "fünf", "english": "five", "date": "2026-08-24" },
  { "german": "fünfzehn", "english": "fifteen", "date": "2026-08-24" },
  { "german": "laut", "english": "loud", "date": "2026-08-24" },
  { "german": "mitsprechen", "english": "to speak along", "date": "2026-08-24" },
  { "german": "neun", "english": "nine", "date": "2026-08-24" },
  { "german": "neunzehn", "english": "nineteen", "date": "2026-08-24" },
  { "german": "null", "english": "zero", "date": "2026-08-24" },
  { "german": "sechs", "english": "six", "date": "2026-08-24" },
  { "german": "sechzehn", "english": "sixteen", "date": "2026-08-24" },
  { "german": "sieben", "english": "seven", "date": "2026-08-24" },
  { "german": "siebzehn", "english": "seventeen", "date": "2026-08-24" },
  { "german": "vier", "english": "four", "date": "2026-08-24" },
  { "german": "vierzehn", "english": "fourteen", "date": "2026-08-24" },
  { "german": "die Zahl, -en", "english": "number", "date": "2026-08-24" },
  { "german": "zehn", "english": "ten", "date": "2026-08-24" },
  { "german": "zwanzig", "english": "twenty", "date": "2026-08-24" },
  { "german": "zwölf", "english": "twelve", "date": "2026-08-24" },
  { "german": "die Handynummer, -n", "english": "mobile phone number", "date": "2026-08-24" },
  { "german": "dein, deine", "english": "your", "date": "2026-08-24" },
  { "german": "fragen", "english": "to ask", "date": "2026-08-24" },
  { "german": "nach", "english": "about", "date": "2026-08-24" },
  { "german": "die Telefonnummer, -n", "english": "telephone number", "date": "2026-08-24" },
  { "german": "das Alphabet, -e", "english": "alphabet", "date": "2026-08-24" },
  { "german": "mitlesen", "english": "to read along", "date": "2026-08-24" },
  { "german": "zuerst", "english": "at first", "date": "2026-08-24" },
  { "german": "die E-Mail-Adresse, -n", "english": "email address", "date": "2026-08-24" },
  { "german": "das Gespräch, -e", "english": "conversation", "date": "2026-08-24" },
  { "german": "man", "english": "one", "date": "2026-08-24" },
  { "german": "minus", "english": "minus", "date": "2026-08-24" },
  { "german": "der Punkt, -e", "english": "period", "date": "2026-08-24" },
  { "german": "sagen", "english": "to say", "date": "2026-08-24" },
  { "german": "schreiben", "english": "to write", "date": "2026-08-24" },
  { "german": "der Unterstrich, -e", "english": "underscore", "date": "2026-08-24" },
  { "german": "bitte", "english": "please", "date": "2026-08-24" },
  { "german": "buchstabieren", "english": "to spell", "date": "2026-08-24" },
  { "german": "der Dialog, -e", "english": "dialogue", "date": "2026-08-24" },
  { "german": "ein bisschen", "english": "a little", "date": "2026-08-24" },
  { "german": "langsam", "english": "slow", "date": "2026-08-24" },
  { "german": "nicht", "english": "not", "date": "2026-08-24" },
  { "german": "noch einmal", "english": "once more", "date": "2026-08-24" },
  { "german": "verstehen", "english": "to understand", "date": "2026-08-24" },
  { "german": "Algerien", "english": "Algeria", "date": "2026-08-28" },
  { "german": "Arabisch", "english": "Arabic", "date": "2026-08-28" },
  { "german": "Brasilien", "english": "Brazil", "date": "2026-08-28" },
  { "german": "Französisch", "english": "French", "date": "2026-08-28" },
  { "german": "Japan", "english": "Japan", "date": "2026-08-28" },
  { "german": "das Land, \"-er", "english": "country", "date": "2026-08-28" },
  { "german": "lernen", "english": "to learn", "date": "2026-08-28" },
  { "german": "Österreich", "english": "Austria", "date": "2026-08-28" },
  { "german": "Portugiesisch", "english": "Portuguese", "date": "2026-08-28" },
  { "german": "die Schweiz (Sg.)", "english": "Switzerland", "date": "2026-08-28" },
  { "german": "sie", "english": "they", "date": "2026-08-28" },
  { "german": "die Tabelle, -n", "english": "table, chart", "date": "2026-08-28" },
  { "german": "die USA (Pl.)", "english": "USA", "date": "2026-08-28" },
  { "german": "Frankreich", "english": "France", "date": "2026-08-28" },
  { "german": "Griechenland", "english": "Greece", "date": "2026-08-28" },
  { "german": "Italien", "english": "Italy", "date": "2026-08-28" },
  { "german": "Mexiko", "english": "Mexico", "date": "2026-08-28" },
  { "german": "Portugal", "english": "Portugal", "date": "2026-08-28" },
  { "german": "Thailand", "english": "Thailand", "date": "2026-08-28" },
  { "german": "Polen", "english": "Poland", "date": "2026-08-28" },
  { "german": "Polnisch", "english": "Polish", "date": "2026-08-28" },
  { "german": "Rätoromanisch", "english": "Raetho-Romanic", "date": "2026-08-28" },
  { "german": "Russland", "english": "Russia", "date": "2026-08-28" },
  { "german": "Spanien", "english": "Spain", "date": "2026-08-28" },
  { "german": "die Türkei (Sg.)", "english": "Turkey", "date": "2026-08-28" },
  { "german": "die Ukraine (Sg.)", "english": "Ukraine", "date": "2026-08-28" },
  { "german": "zu", "english": "as", "date": "2026-08-28" },
  { "german": "zweit", "english": "pair", "date": "2026-08-28" },
  { "german": "kurz", "english": "short", "date": "2026-08-28" },
  { "german": "die Stadt, \"-e", "english": "city", "date": "2026-08-28" },
  { "german": "der Text, -e", "english": "text", "date": "2026-08-28" },
  { "german": "das Befinden (Sg.)", "english": "condition", "date": "2026-08-28" },
  { "german": "darauf", "english": "upon", "date": "2026-08-28" },
  { "german": "die Grammatik, -en", "english": "grammar", "date": "2026-08-28" },
  { "german": "grüßen", "english": "to greet", "date": "2026-08-28" },
  { "german": "reagieren", "english": "to react", "date": "2026-08-28" },
  { "german": "das Redemittel, -", "english": "useful phrases", "date": "2026-08-28" },
  { "german": "das Subjekt, -e", "english": "subject", "date": "2026-08-28" },
  { "german": "über (+ A.)", "english": "about", "date": "2026-08-28" },
  { "german": "verabschieden", "english": "to say goodbye", "date": "2026-08-28" },
  { "german": "das W-Wort, \"-er", "english": "w-word", "date": "2026-08-28" }
];

let currentWord = null;
let questionCount = 1;
let isReverse = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const practiceScreen = document.getElementById('practice-screen');
const startBtn = document.getElementById('start-btn');

const questionCounterEl = document.getElementById('question-counter');
const instructionTextEl = document.getElementById('instruction-text');
const questionWordEl = document.getElementById('question-word');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackArea = document.getElementById('feedback-area');
const correctAnswerEl = document.getElementById('correct-answer');

// 1. Transition from Start Screen to Practice Screen
startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    practiceScreen.classList.remove('hidden');
    loadNextQuestion();
});

// 2. The 60/20/20 Logic
function getWeightedRandomWord() {
    const uniqueDates = [...new Set(vocabData.map(item => item.date))].sort().reverse();
    
    const newestDate = uniqueDates[0];
    const secondNewestDate = uniqueDates.length > 1 ? uniqueDates[1] : newestDate;
    
    const newestWords = vocabData.filter(item => item.date === newestDate);
    const secondNewestWords = vocabData.filter(item => item.date === secondNewestDate && item.date !== newestDate);
    const olderWords = vocabData.filter(item => item.date !== newestDate && item.date !== secondNewestDate);

    const roll = Math.floor(Math.random() * 100) + 1;
    let selectedPool = [];

    if (roll <= 60 && newestWords.length > 0) {
        selectedPool = newestWords;
    } else if (roll <= 80 && secondNewestWords.length > 0) {
        selectedPool = secondNewestWords;
    } else if (olderWords.length > 0) {
        selectedPool = olderWords;
    } else {
        selectedPool = vocabData; 
    }

    const randomIndex = Math.floor(Math.random() * selectedPool.length);
    return selectedPool[randomIndex];
}

// 3. Display Logic for Questions
function loadNextQuestion() {
    currentWord = getWeightedRandomWord();
    
    // Reverse Translation every 4 questions
    isReverse = (questionCount % 4 === 0);

    questionCounterEl.textContent = `Question ${questionCount}`;
    
    if (isReverse) {
        instructionTextEl.textContent = "Translate to English:";
        questionWordEl.textContent = currentWord.german;
    } else {
        instructionTextEl.textContent = "Translate to German (include article if noun):";
        questionWordEl.textContent = currentWord.english;
    }

    // Reset visibility of elements
    feedbackArea.classList.add('hidden');
    checkBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
}

// 4. Check Answer Button logic
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

// 5. Next Button logic
nextBtn.addEventListener('click', () => {
    questionCount++;
    loadNextQuestion();
});
