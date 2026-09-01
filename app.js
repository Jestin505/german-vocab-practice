// Complete Database Hardcoded to prevent local testing errors
const vocabData = [
  { "german": "Bulgarisch", "english": "Bulgarian", "date": "2026-08-21", "page": 3 },
  { "german": "Deutsch", "english": "German", "date": "2026-08-21", "page": 3 },
  { "german": "Englisch", "english": "English", "date": "2026-08-21", "page": 3 },
  { "german": "gut", "english": "good", "date": "2026-08-21", "page": 3 },
  { "german": "guten Tag", "english": "Good day! Hello!", "date": "2026-08-21", "page": 3 },
  { "german": "Indonesisch", "english": "Indonesian", "date": "2026-08-21", "page": 3 },
  { "german": "international", "english": "international", "date": "2026-08-21", "page": 3 },
  { "german": "Italienisch", "english": "Italian", "date": "2026-08-21", "page": 3 },
  { "german": "Japanisch", "english": "Japanese", "date": "2026-08-21", "page": 3 },
  { "german": "Russisch", "english": "Russian", "date": "2026-08-21", "page": 3 },
  { "german": "Serbisch", "english": "Serbian", "date": "2026-08-21", "page": 3 },
  { "german": "Sie", "english": "you (formal)", "date": "2026-08-21", "page": 3 },
  { "german": "Türkisch", "english": "Turkish", "date": "2026-08-21", "page": 3 },
  { "german": "Ungarisch", "english": "Hungarian", "date": "2026-08-21", "page": 3 },
  { "german": "was", "english": "what?", "date": "2026-08-21", "page": 3 },
  { "german": "zuordnen", "english": "to assign, to match", "date": "2026-08-21", "page": 3 },
  { "german": "zusammengehören", "english": "to fit together", "date": "2026-08-21", "page": 3 },
  { "german": "die Autobahn, -en", "english": "highway", "date": "2026-08-21", "page": 3 },
  { "german": "das Butterbrot, -e", "english": "sandwich", "date": "2026-08-21", "page": 3 },
  { "german": "die Flasche, -n", "english": "bottle", "date": "2026-08-21", "page": 3 },
  { "german": "das Handtuch, \"-er", "english": "towel", "date": "2026-08-21", "page": 3 },
  { "german": "der Kindergarten, \"-", "english": "kindergarten", "date": "2026-08-21", "page": 3 },
  { "german": "der Koffer, -", "english": "suitcase", "date": "2026-08-21", "page": 3 },
  { "german": "der/die Kranke, -n", "english": "sick person", "date": "2026-08-21", "page": 3 },
  { "german": "die Nudel, -n", "english": "noodle", "date": "2026-08-21", "page": 3 },
  { "german": "das Würstchen, -", "english": "sausage", "date": "2026-08-21", "page": 3 },
  { "german": "das Würstel, -", "english": "sausage", "date": "2026-08-21", "page": 3 },
  { "german": "auf", "english": "in", "date": "2026-08-21", "page": 3 },
  { "german": "heißen", "english": "to be called", "date": "2026-08-21", "page": 3 },
  { "german": "Ihr, Ihre", "english": "your", "date": "2026-08-21", "page": 3 },
  { "german": "in", "english": "in", "date": "2026-08-21", "page": 3 },
  { "german": "Spanisch", "english": "Spanish", "date": "2026-08-21", "page": 3 },
  { "german": "die Sprache, -n", "english": "language", "date": "2026-08-21", "page": 3 },
  { "german": "wie", "english": "what", "date": "2026-08-21", "page": 3 },
  { "german": "das Wort, \"-er", "english": "word", "date": "2026-08-21", "page": 3 },
  { "german": "andere, anderer", "english": "other", "date": "2026-08-21", "page": 3 },
  { "german": "deutsch", "english": "German", "date": "2026-08-22", "page": 4 },
  { "german": "ein, eine", "english": "a", "date": "2026-08-22", "page": 4 },
  { "german": "kennen", "english": "to know", "date": "2026-08-22", "page": 4 },
  { "german": "das Kursplakat, -e", "english": "course poster", "date": "2026-08-22", "page": 4 },
  { "german": "machen", "english": "to make", "date": "2026-08-22", "page": 4 },
  { "german": "sammeln", "english": "to collect", "date": "2026-08-22", "page": 4 },
  { "german": "und", "english": "and", "date": "2026-08-22", "page": 4 },
  { "german": "auch", "english": "also", "date": "2026-08-22", "page": 4 },
  { "german": "bis bald", "english": "see you soon", "date": "2026-08-22", "page": 4 },
  { "german": "ciao", "english": "bye", "date": "2026-08-22", "page": 4 },
  { "german": "danke", "english": "thank you", "date": "2026-08-22", "page": 4 },
  { "german": "die", "english": "the", "date": "2026-08-22", "page": 4 },
  { "german": "dir", "english": "you (dat.)", "date": "2026-08-22", "page": 4 },
  { "german": "du", "english": "you", "date": "2026-08-22", "page": 4 },
  { "german": "die Entschuldigung, -en", "english": "to be sorry", "date": "2026-08-22", "page": 4 },
  { "german": "ganz", "english": "pretty", "date": "2026-08-22", "page": 4 },
  { "german": "gehen", "english": "to go", "date": "2026-08-22", "page": 4 },
  { "german": "gut", "english": "good", "date": "2026-08-22", "page": 4 },
  { "german": "hallo", "english": "hello", "date": "2026-08-22", "page": 4 },
  { "german": "hören", "english": "to hear", "date": "2026-08-22", "page": 4 },
  { "german": "ich", "english": "I", "date": "2026-08-22", "page": 4 },
  { "german": "lesen", "english": "to read", "date": "2026-08-22", "page": 4 },
  { "german": "die Person, -en", "english": "person", "date": "2026-08-22", "page": 4 },
  { "german": "sehr", "english": "very", "date": "2026-08-22", "page": 4 },
  { "german": "sein", "english": "to be", "date": "2026-08-22", "page": 4 },
  { "german": "tschüs", "english": "bye", "date": "2026-08-22", "page": 4 },
  { "german": "wer", "english": "who?", "date": "2026-08-22", "page": 4 },
  { "german": "die Situation, -en", "english": "situation", "date": "2026-08-22", "page": 4 },
  { "german": "spielen", "english": "to play", "date": "2026-08-22", "page": 4 },
  { "german": "bekannt", "english": "well-known", "date": "2026-08-22", "page": 4 },
  { "german": "der Name, -n", "english": "name", "date": "2026-08-22", "page": 4 },
  { "german": "oder", "english": "or", "date": "2026-08-22", "page": 4 },
  { "german": "auf Wiedersehen", "english": "goodbye", "date": "2026-08-22", "page": 4 },
  { "german": "das", "english": "this", "date": "2026-08-22", "page": 4 },
  { "german": "es", "english": "it", "date": "2026-08-22", "page": 4 },
  { "german": "Frau", "english": "Miss, Mrs, Ms", "date": "2026-08-22", "page": 4 },
  { "german": "gute Nacht", "english": "good night", "date": "2026-08-22", "page": 4 },
  { "german": "guten Abend", "english": "good evening", "date": "2026-08-22", "page": 4 },
  { "german": "guten Morgen", "english": "good morning", "date": "2026-08-23", "page": 5 },
  { "german": "Herr", "english": "Mr", "date": "2026-08-23", "page": 5 },
  { "german": "Ihnen", "english": "you (formal, dat.)", "date": "2026-08-23", "page": 5 },
  { "german": "mein, meine", "english": "my", "date": "2026-08-23", "page": 5 },
  { "german": "formell", "english": "formal", "date": "2026-08-23", "page": 5 },
  { "german": "informell", "english": "informal", "date": "2026-08-23", "page": 5 },
  { "german": "der Nachname, -n", "english": "last name", "date": "2026-08-23", "page": 5 },
  { "german": "das Personalpronomen, -", "english": "personal pronoun", "date": "2026-08-23", "page": 5 },
  { "german": "das Verb, -en", "english": "verb", "date": "2026-08-23", "page": 5 },
  { "german": "der Vorname, -n", "english": "first name", "date": "2026-08-23", "page": 5 },
  { "german": "die Antwort, -en", "english": "answer", "date": "2026-08-23", "page": 5 },
  { "german": "aus", "english": "from", "date": "2026-08-23", "page": 5 },
  { "german": "Deutschland", "english": "Germany", "date": "2026-08-23", "page": 5 },
  { "german": "in", "english": "in", "date": "2026-08-23", "page": 5 },
  { "german": "kommen", "english": "to come from", "date": "2026-08-23", "page": 5 },
  { "german": "der Reiseführer, -", "english": "travel guide (m)", "date": "2026-08-23", "page": 5 },
  { "german": "die Reiseführerin, -nen", "english": "travel guide (f)", "date": "2026-08-23", "page": 5 },
  { "german": "sprechen", "english": "to speak", "date": "2026-08-23", "page": 5 },
  { "german": "das Telefon, -e", "english": "telephone", "date": "2026-08-23", "page": 5 },
  { "german": "welche, welcher", "english": "which", "date": "2026-08-23", "page": 5 },
  { "german": "wo", "english": "where", "date": "2026-08-23", "page": 5 },
  { "german": "woher", "english": "from where", "date": "2026-08-23", "page": 5 },
  { "german": "wohnen", "english": "to live", "date": "2026-08-23", "page": 5 },
  { "german": "der Aussagesatz, \"-e", "english": "declarative sentence", "date": "2026-08-23", "page": 5 },
  { "german": "den", "english": "the", "date": "2026-08-23", "page": 5 },
  { "german": "das Interview, -s", "english": "interview", "date": "2026-08-23", "page": 5 },
  { "german": "variieren", "english": "to vary", "date": "2026-08-23", "page": 5 },
  { "german": "die W-Frage, -n", "english": "w-question", "date": "2026-08-23", "page": 5 },
  { "german": "er", "english": "he", "date": "2026-08-23", "page": 5 },
  { "german": "ergänzen", "english": "to complete", "date": "2026-08-23", "page": 5 },
  { "german": "sie", "english": "she", "date": "2026-08-23", "page": 5 },
  { "german": "notieren", "english": "to note", "date": "2026-08-23", "page": 5 },
  { "german": "wie", "english": "like", "date": "2026-08-23", "page": 5 },
  { "german": "zwei", "english": "two", "date": "2026-08-23", "page": 5 },
  { "german": "der Partner, -", "english": "partner (m)", "date": "2026-08-23", "page": 5 },
  { "german": "die Partnerin, -nen", "english": "partner (f)", "date": "2026-08-23", "page": 5 },
  { "german": "raten", "english": "to guess", "date": "2026-08-23", "page": 5 },
  { "german": "vorstellen", "english": "to introduce", "date": "2026-08-23", "page": 5 },
  { "german": "acht", "english": "eight", "date": "2026-08-23", "page": 5 },
  { "german": "achtzehn", "english": "eighteen", "date": "2026-08-23", "page": 5 },
  { "german": "der Buchstabe, -n", "english": "letter", "date": "2026-08-23", "page": 5 },
  { "german": "dann", "english": "then", "date": "2026-08-23", "page": 5 },
  { "german": "drei", "english": "three", "date": "2026-08-23", "page": 5 },
  { "german": "dreizehn", "english": "thirteen", "date": "2026-08-24", "page": 6 },
  { "german": "eins", "english": "one", "date": "2026-08-24", "page": 6 },
  { "german": "elf", "english": "eleven", "date": "2026-08-24", "page": 6 },
  { "german": "fünf", "english": "five", "date": "2026-08-24", "page": 6 },
  { "german": "fünfzehn", "english": "fifteen", "date": "2026-08-24", "page": 6 },
  { "german": "laut", "english": "loud", "date": "2026-08-24", "page": 6 },
  { "german": "mitsprechen", "english": "to speak along", "date": "2026-08-24", "page": 6 },
  { "german": "neun", "english": "nine", "date": "2026-08-24", "page": 6 },
  { "german": "neunzehn", "english": "nineteen", "date": "2026-08-24", "page": 6 },
  { "german": "null", "english": "zero", "date": "2026-08-24", "page": 6 },
  { "german": "sechs", "english": "six", "date": "2026-08-24", "page": 6 },
  { "german": "sechzehn", "english": "sixteen", "date": "2026-08-24", "page": 6 },
  { "german": "sieben", "english": "seven", "date": "2026-08-24", "page": 6 },
  { "german": "siebzehn", "english": "seventeen", "date": "2026-08-24", "page": 6 },
  { "german": "vier", "english": "four", "date": "2026-08-24", "page": 6 },
  { "german": "vierzehn", "english": "fourteen", "date": "2026-08-24", "page": 6 },
  { "german": "die Zahl, -en", "english": "number", "date": "2026-08-24", "page": 6 },
  { "german": "zehn", "english": "ten", "date": "2026-08-24", "page": 6 },
  { "german": "zwanzig", "english": "twenty", "date": "2026-08-24", "page": 6 },
  { "german": "zwölf", "english": "twelve", "date": "2026-08-24", "page": 6 },
  { "german": "die Handynummer, -n", "english": "mobile phone number", "date": "2026-08-24", "page": 6 },
  { "german": "dein, deine", "english": "your", "date": "2026-08-24", "page": 6 },
  { "german": "fragen", "english": "to ask", "date": "2026-08-24", "page": 6 },
  { "german": "nach", "english": "about", "date": "2026-08-24", "page": 6 },
  { "german": "die Telefonnummer, -n", "english": "telephone number", "date": "2026-08-24", "page": 6 },
  { "german": "das Alphabet, -e", "english": "alphabet", "date": "2026-08-24", "page": 6 },
  { "german": "mitlesen", "english": "to read along", "date": "2026-08-24", "page": 6 },
  { "german": "zuerst", "english": "at first", "date": "2026-08-24", "page": 6 },
  { "german": "die E-Mail-Adresse, -n", "english": "email address", "date": "2026-08-24", "page": 6 },
  { "german": "das Gespräch, -e", "english": "conversation", "date": "2026-08-24", "page": 6 },
  { "german": "man", "english": "one", "date": "2026-08-24", "page": 6 },
  { "german": "minus", "english": "minus", "date": "2026-08-24", "page": 6 },
  { "german": "der Punkt, -e", "english": "period", "date": "2026-08-24", "page": 6 },
  { "german": "sagen", "english": "to say", "date": "2026-08-24", "page": 6 },
  { "german": "schreiben", "english": "to write", "date": "2026-08-24", "page": 6 },
  { "german": "der Unterstrich, -e", "english": "underscore", "date": "2026-08-24", "page": 6 },
  { "german": "bitte", "english": "please", "date": "2026-08-24", "page": 6 },
  { "german": "buchstabieren", "english": "to spell", "date": "2026-08-24", "page": 6 },
  { "german": "der Dialog, -e", "english": "dialogue", "date": "2026-08-24", "page": 6 },
  { "german": "ein bisschen", "english": "a little", "date": "2026-08-24", "page": 6 },
  { "german": "langsam", "english": "slow", "date": "2026-08-24", "page": 6 },
  { "german": "nicht", "english": "not", "date": "2026-08-24", "page": 6 },
  { "german": "noch einmal", "english": "once more", "date": "2026-08-24", "page": 6 },
  { "german": "verstehen", "english": "to understand", "date": "2026-08-24", "page": 6 },
  { "german": "Algerien", "english": "Algeria", "date": "2026-08-28", "page": 7 },
  { "german": "Arabisch", "english": "Arabic", "date": "2026-08-28", "page": 7 },
  { "german": "Brasilien", "english": "Brazil", "date": "2026-08-28", "page": 7 },
  { "german": "Französisch", "english": "French", "date": "2026-08-28", "page": 7 },
  { "german": "Japan", "english": "Japan", "date": "2026-08-28", "page": 7 },
  { "german": "das Land, \"-er", "english": "country", "date": "2026-08-28", "page": 7 },
  { "german": "lernen", "english": "to learn", "date": "2026-08-28", "page": 7 },
  { "german": "Österreich", "english": "Austria", "date": "2026-08-28", "page": 7 },
  { "german": "Portugiesisch", "english": "Portuguese", "date": "2026-08-28", "page": 7 },
  { "german": "die Schweiz (Sg.)", "english": "Switzerland", "date": "2026-08-28", "page": 7 },
  { "german": "sie", "english": "they", "date": "2026-08-28", "page": 7 },
  { "german": "die Tabelle, -n", "english": "table, chart", "date": "2026-08-28", "page": 7 },
  { "german": "die USA (Pl.)", "english": "USA", "date": "2026-08-28", "page": 7 },
  { "german": "Frankreich", "english": "France", "date": "2026-08-28", "page": 7 },
  { "german": "Griechenland", "english": "Greece", "date": "2026-08-28", "page": 7 },
  { "german": "Italien", "english": "Italy", "date": "2026-08-28", "page": 7 },
  { "german": "Mexiko", "english": "Mexico", "date": "2026-08-28", "page": 7 },
  { "german": "Portugal", "english": "Portugal", "date": "2026-08-28", "page": 7 },
  { "german": "Thailand", "english": "Thailand", "date": "2026-08-28", "page": 7 },
  { "german": "Polen", "english": "Poland", "date": "2026-08-28", "page": 7 },
  { "german": "Polnisch", "english": "Polish", "date": "2026-08-28", "page": 7 },
  { "german": "Rätoromanisch", "english": "Raetho-Romanic", "date": "2026-08-28", "page": 7 },
  { "german": "Russland", "english": "Russia", "date": "2026-08-28", "page": 7 },
  { "german": "Spanien", "english": "Spain", "date": "2026-08-28", "page": 7 },
  { "german": "die Türkei (Sg.)", "english": "Turkey", "date": "2026-08-28", "page": 7 },
  { "german": "die Ukraine (Sg.)", "english": "Ukraine", "date": "2026-08-28", "page": 7 },
  { "german": "zu", "english": "as", "date": "2026-08-28", "page": 7 },
  { "german": "zweit", "english": "pair", "date": "2026-08-28", "page": 7 },
  { "german": "kurz", "english": "short", "date": "2026-08-28", "page": 7 },
  { "german": "die Stadt, \"-e", "english": "city", "date": "2026-08-28", "page": 7 },
  { "german": "der Text, -e", "english": "text", "date": "2026-08-28", "page": 7 },
  { "german": "das Befinden (Sg.)", "english": "condition", "date": "2026-08-28", "page": 7 },
  { "german": "darauf", "english": "upon", "date": "2026-08-28", "page": 7 },
  { "german": "die Grammatik, -en", "english": "grammar", "date": "2026-08-28", "page": 7 },
  { "german": "grüßen", "english": "to greet", "date": "2026-08-28", "page": 7 },
  { "german": "reagieren", "english": "to react", "date": "2026-08-28", "page": 7 },
  { "german": "das Redemittel, -", "english": "useful phrases", "date": "2026-08-28", "page": 7 },
  { "german": "das Subjekt, -e", "english": "subject", "date": "2026-08-28", "page": 7 },
  { "german": "über (+ A.)", "english": "about", "date": "2026-08-28", "page": 7 },
  { "german": "verabschieden", "english": "to say goodbye", "date": "2026-08-28", "page": 7 },
  { "german": "das W-Wort, \"-er", "english": "w-word", "date": "2026-08-28", "page": 7 },
  { "german": "gern", "english": "glad", "date": "2026-08-30", "page": 8 },
  { "german": "die Leute (Pl.)", "english": "people", "date": "2026-08-30", "page": 8 },
  { "german": "fotografieren", "english": "to photograph", "date": "2026-08-30", "page": 8 },
  { "german": "der Freund, -e", "english": "friend", "date": "2026-08-30", "page": 8 },
  { "german": "die Freundin, -nen", "english": "female friend, girlfriend", "date": "2026-08-30", "page": 8 },
  { "german": "joggen", "english": "to jog", "date": "2026-08-30", "page": 8 },
  { "german": "der Kollege, -n", "english": "colleague (m)", "date": "2026-08-30", "page": 8 },
  { "german": "die Kollegin, -nen", "english": "colleague (f)", "date": "2026-08-30", "page": 8 },
  { "german": "die Musik (Sg.)", "english": "music", "date": "2026-08-30", "page": 8 },
  { "german": "singen", "english": "to sing", "date": "2026-08-30", "page": 8 },
  { "german": "tanzen", "english": "to dance", "date": "2026-08-30", "page": 8 },
  { "german": "ankreuzen", "english": "to mark", "date": "2026-08-30", "page": 8 },
  { "german": "gehen", "english": "to go", "date": "2026-08-30", "page": 8 },
  { "german": "das Kino, -s", "english": "movie theater", "date": "2026-08-30", "page": 8 },
  { "german": "kochen", "english": "to cook", "date": "2026-08-30", "page": 8 },
  { "german": "reisen", "english": "to travel", "date": "2026-08-30", "page": 8 },
  { "german": "schwimmen", "english": "to swim", "date": "2026-08-30", "page": 8 },
  { "german": "antworten", "english": "to answer", "date": "2026-08-30", "page": 8 },
  { "german": "arbeiten", "english": "to work", "date": "2026-08-30", "page": 8 },
  { "german": "gehen", "english": "to be okay", "date": "2026-08-30", "page": 8 },
  { "german": "ja", "english": "yes", "date": "2026-08-30", "page": 8 },
  { "german": "nein", "english": "no", "date": "2026-08-30", "page": 8 },
  { "german": "so", "english": "so", "date": "2026-08-30", "page": 8 },
  { "german": "das Buch, \"-er", "english": "book", "date": "2026-08-30", "page": 8 },
  { "german": "Fußball (Sg. ohne Artikel)", "english": "football", "date": "2026-08-30", "page": 8 },
  { "german": "lieben", "english": "to love", "date": "2026-08-30", "page": 8 },
  { "german": "die Sensation, -en", "english": "sensation", "date": "2026-08-30", "page": 8 },
  { "german": "super", "english": "super", "date": "2026-08-30", "page": 8 },
  { "german": "toll", "english": "great", "date": "2026-08-30", "page": 8 },
  { "german": "wir", "english": "we", "date": "2026-08-30", "page": 8 },
  { "german": "am", "english": "at", "date": "2026-08-30", "page": 8 },
  { "german": "die Endung, -en", "english": "ending", "date": "2026-08-30", "page": 8 },
  { "german": "das Foto, -s", "english": "photo", "date": "2026-08-30", "page": 8 },
  { "german": "ihr", "english": "you", "date": "2026-08-30", "page": 8 },
  { "german": "der Kommentar, -e", "english": "commentary", "date": "2026-08-30", "page": 8 },
  { "german": "lustig", "english": "funny", "date": "2026-08-30", "page": 8 },
  { "german": "der Moment, -e", "english": "moment", "date": "2026-08-31", "page": 9 },
  { "german": "morgen", "english": "tomorrow", "date": "2026-08-31", "page": 9 },
  { "german": "die Spaghetti (Pl.)", "english": "spaghetti", "date": "2026-08-31", "page": 9 },
  { "german": "von (+ D.)", "english": "by", "date": "2026-08-31", "page": 9 },
  { "german": "wirklich", "english": "really", "date": "2026-08-31", "page": 9 },
  { "german": "das Wochenende, -n", "english": "weekend", "date": "2026-08-31", "page": 9 },
  { "german": "dritt", "english": "threes", "date": "2026-08-31", "page": 9 },
  { "german": "die Form, -en", "english": "form, shape, mold", "date": "2026-08-31", "page": 9 },
  { "german": "der Infinitiv, -e", "english": "infinitive", "date": "2026-08-31", "page": 9 },
  { "german": "nennen", "english": "to name", "date": "2026-08-31", "page": 9 },
  { "german": "das Hobby, -s", "english": "hobby", "date": "2026-08-31", "page": 9 },
  { "german": "mit (+ D.)", "english": "with", "date": "2026-08-31", "page": 9 },
  { "german": "der Dienstag, -e", "english": "Tuesday", "date": "2026-08-31", "page": 9 },
  { "german": "der Donnerstag, -e", "english": "Thursday", "date": "2026-08-31", "page": 9 },
  { "german": "der Freitag, -e", "english": "Friday", "date": "2026-08-31", "page": 9 },
  { "german": "der Mittwoch, -e", "english": "Wednesday", "date": "2026-08-31", "page": 9 },
  { "german": "der Montag, -e", "english": "Monday", "date": "2026-08-31", "page": 9 },
  { "german": "der Samstag, -e", "english": "Saturday", "date": "2026-08-31", "page": 9 },
  { "german": "der Sonntag, -e", "english": "Sunday", "date": "2026-08-31", "page": 9 },
  { "german": "wann", "english": "when", "date": "2026-08-31", "page": 9 },
  { "german": "der Wochentag, -e", "english": "day of the week", "date": "2026-08-31", "page": 9 },
  { "german": "die Frage, -n", "english": "question", "date": "2026-08-31", "page": 9 },
  { "german": "gehen", "english": "to go", "date": "2026-08-31", "page": 9 },
  { "german": "leider", "english": "unfortunately", "date": "2026-08-31", "page": 9 },
  { "german": "nachsprechen", "english": "to repeat", "date": "2026-08-31", "page": 9 },
  { "german": "die Satzmelodie, -n", "english": "intonation", "date": "2026-08-31", "page": 9 },
  { "german": "achten", "english": "to pay attention", "date": "2026-08-31", "page": 9 },
  { "german": "auf (+ A.)", "english": "here: to", "date": "2026-08-31", "page": 9 },
  { "german": "für (+ A.)", "english": "for", "date": "2026-08-31", "page": 9 },
  { "german": "oft", "english": "often", "date": "2026-08-31", "page": 9 },
  { "german": "das Café, -s", "english": "café", "date": "2026-08-31", "page": 9 },
  { "german": "durch (+ A.)", "english": "through", "date": "2026-08-31", "page": 9 },
  { "german": "die Ja-/Nein-Frage, -n", "english": "yes-/no-question", "date": "2026-08-31", "page": 9 },
  { "german": "jede, jeder", "english": "every", "date": "2026-08-31", "page": 9 },
  { "german": "der Kursraum, \"-e", "english": "course room", "date": "2026-08-31", "page": 9 },
  { "german": "das Museum, Museen", "english": "museum", "date": "2026-08-31", "page": 9 },
  { "german": "das Restaurant, -s", "english": "restaurant", "date": "2026-08-31", "page": 9 },
  { "german": "das Schwimmbad, \"-er", "english": "swimming pool", "date": "2026-08-31", "page": 9 },
  { "german": "das Stadion, Stadien", "english": "stadium", "date": "2026-08-31", "page": 9 },
  { "german": "der Tag, -e", "english": "day", "date": "2026-08-31", "page": 9 },
  { "german": "der Termin, -e", "english": "appointment", "date": "2026-08-31", "page": 9 },
  { "german": "das Theater, -", "english": "theatre", "date": "2026-08-31", "page": 9 },
  { "german": "die Verabredung, -en", "english": "appointment", "date": "2026-08-31", "page": 9 },
  { "german": "der Artikel, -", "english": "article", "date": "2026-09-01", "page": 10 },
  { "german": "der Arzt, \"-e", "english": "doctor (m)", "date": "2026-09-01", "page": 10 },
  { "german": "die Ärztin, -nen", "english": "doctor (f)", "date": "2026-09-01", "page": 10 },
  { "german": "das Auto, -s", "english": "car", "date": "2026-09-01", "page": 10 },
  { "german": "der Beruf, -e", "english": "occupation", "date": "2026-09-01", "page": 10 },
  { "german": "bestimmt", "english": "here: definite", "date": "2026-09-01", "page": 10 },
  { "german": "der Computer, -", "english": "computer", "date": "2026-09-01", "page": 10 },
  { "german": "feminin", "english": "feminine", "date": "2026-09-01", "page": 10 },
  { "german": "geben", "english": "here: to be", "date": "2026-09-01", "page": 10 },
  { "german": "das Geld, -er", "english": "money", "date": "2026-09-01", "page": 10 },
  { "german": "das Glas, \"-er", "english": "glass", "date": "2026-09-01", "page": 10 },
  { "german": "der Kellner, -", "english": "waiter", "date": "2026-09-01", "page": 10 },
  { "german": "die Kellnerin, -nen", "english": "waitress", "date": "2026-09-01", "page": 10 },
  { "german": "maskulin", "english": "masculine", "date": "2026-09-01", "page": 10 },
  { "german": "das Medikament, -e", "english": "medicine", "date": "2026-09-01", "page": 10 },
  { "german": "mehrere", "english": "several", "date": "2026-09-01", "page": 10 },
  { "german": "die Möglichkeit, -en", "english": "possibility", "date": "2026-09-01", "page": 10 },
  { "german": "neutrum", "english": "neuter", "date": "2026-09-01", "page": 10 },
  { "german": "passen", "english": "to match", "date": "2026-09-01", "page": 10 },
  { "german": "der Plural, -e", "english": "plural", "date": "2026-09-01", "page": 10 },
  { "german": "die Rechnung, -en", "english": "bill", "date": "2026-09-01", "page": 10 },
  { "german": "der Schlüssel, -", "english": "key", "date": "2026-09-01", "page": 10 },
  { "german": "die Spritze, -n", "english": "injection", "date": "2026-09-01", "page": 10 },
  { "german": "der Stift, -e", "english": "pencil", "date": "2026-09-01", "page": 10 },
  { "german": "die Straße, -n", "english": "street", "date": "2026-09-01", "page": 10 },
  { "german": "der Student, -en", "english": "student (m)", "date": "2026-09-01", "page": 10 },
  { "german": "die Studentin, -nen", "english": "student (f)", "date": "2026-09-01", "page": 10 },
  { "german": "die Tablette, -n", "english": "pill", "date": "2026-09-01", "page": 10 },
  { "german": "der Taxifahrer, -", "english": "taxi driver (m)", "date": "2026-09-01", "page": 10 },
  { "german": "die Taxifahrerin, -nen", "english": "taxi driver (f)", "date": "2026-09-01", "page": 10 },
  { "german": "zu (+ D.)", "english": "to", "date": "2026-09-01", "page": 10 },
  { "german": "markieren", "english": "to highlight", "date": "2026-09-01", "page": 10 },
  { "german": "das Nomen, -", "english": "noun", "date": "2026-09-01", "page": 10 },
  { "german": "das Kapitel, -", "english": "chapter", "date": "2026-09-01", "page": 10 },
  { "german": "der Kurs, -e", "english": "course", "date": "2026-09-01", "page": 10 },
  { "german": "der Lernwortschatz, \"-e", "english": "learning vocabulary", "date": "2026-09-01", "page": 10 },
  { "german": "die Seite, -n", "english": "page", "date": "2026-09-01", "page": 10 },
  { "german": "suchen", "english": "to search", "date": "2026-09-01", "page": 10 },
  { "german": "das Übungsbuch, \"-er", "english": "exercise book", "date": "2026-09-01", "page": 10 },
  { "german": "vergleichen", "english": "to compare", "date": "2026-09-01", "page": 10 },
  { "german": "weitere, weiterer", "english": "further", "date": "2026-09-01", "page": 10 },
  { "german": "der Abend, -e", "english": "evening", "date": "2026-09-01", "page": 10 },
  { "german": "aber", "english": "but", "date": "2026-09-01", "page": 10 },
  { "german": "alt", "english": "old", "date": "2026-09-01", "page": 10 },
  { "german": "bei (+ D.)", "english": "at", "date": "2026-09-01", "page": 10 },
  { "german": "fahren", "english": "to drive", "date": "2026-09-01", "page": 10 }
];

let currentWord = null;
let questionCount = 1;
let isReverse = false;
let usedIndices = []; // Tracks words already asked in this session

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
const speakBtn = document.getElementById('speak-btn');

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    practiceScreen.classList.remove('hidden');
    loadNextQuestion();
});

function getNextWord() {
    // 1. Check if all words have been exhausted
    if (usedIndices.length >= vocabData.length) {
        return null; // Signals end of quiz
    }

    const uniqueDates = [...new Set(vocabData.map(item => item.date))].sort().reverse();
    const newestDate = uniqueDates[0];
    const secondNewestDate = uniqueDates.length > 1 ? uniqueDates[1] : newestDate;

    let selectedPool = [];

    // 2. First 10 questions must come from the newest date batch (unrepeated)
    if (questionCount <= 10) {
        const newestUnused = vocabData
            .map((item, index) => ({ item, index }))
            .filter(obj => obj.item.date === newestDate && !usedIndices.includes(obj.index));

        if (newestUnused.length > 0) {
            const randomObj = newestUnused[Math.floor(Math.random() * newestUnused.length)];
            usedIndices.push(randomObj.index);
            return randomObj.item;
        }
    }

    // 3. Remaining questions use 60/20/20 weighted logic on remaining unused words
    const newestWords = vocabData.map((item, index) => ({ item, index })).filter(obj => obj.item.date === newestDate && !usedIndices.includes(obj.index));
    const secondNewestWords = vocabData.map((item, index) => ({ item, index })).filter(obj => obj.item.date === secondNewestDate && obj.item.date !== newestDate && !usedIndices.includes(obj.index));
    const olderWords = vocabData.map((item, index) => ({ item, index })).filter(obj => obj.item.date !== newestDate && obj.item.date !== secondNewestDate && !usedIndices.includes(obj.index));

    const roll = Math.floor(Math.random() * 100) + 1;

    if (roll <= 60 && newestWords.length > 0) {
        selectedPool = newestWords;
    } else if (roll <= 80 && secondNewestWords.length > 0) {
        selectedPool = secondNewestWords;
    } else if (olderWords.length > 0) {
        selectedPool = olderWords;
    } else {
        // Fallback to any remaining unused words
        selectedPool = vocabData.map((item, index) => ({ item, index })).filter(obj => !usedIndices.includes(obj.index));
    }

    if (selectedPool.length > 0) {
        const chosen = selectedPool[Math.floor(Math.random() * selectedPool.length)];
        usedIndices.push(chosen.index);
        return chosen.item;
    }

    return null;
}

function loadNextQuestion() {
    currentWord = getNextWord();

    // If no words are left, show the finish message
    if (!currentWord) {
        questionCounterEl.textContent = "";
        instructionTextEl.textContent = "";
        questionWordEl.textContent = "Please restart the quiz";
        checkBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        speakBtn.classList.add('hidden');
        feedbackArea.classList.add('hidden');
        return;
    }

    isReverse = (questionCount % 4 === 0);

    questionCounterEl.textContent = `Question ${questionCount}`;
    
    // Check if a page number exists for the word, otherwise leave it blank
    const pageText = currentWord.page ? ` (Page No. ${currentWord.page})` : "";
    
    if (isReverse) {
        instructionTextEl.textContent = `Translate to English:${pageText}`;
        questionWordEl.textContent = currentWord.german;
    } else {
        instructionTextEl.textContent = `Translate to German (include article if noun):${pageText}`;
        questionWordEl.textContent = currentWord.english;
    }

    feedbackArea.classList.add('hidden');
    checkBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
}

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

nextBtn.addEventListener('click', () => {
    questionCount++;
    loadNextQuestion();
});

// Pronunciation Event Listener
speakBtn.addEventListener('click', () => {
    // Check if the browser supports speech synthesis and a word is loaded
    if ('speechSynthesis' in window && currentWord) {
        // We always pass currentWord.german because you want to hear the German word
        const utterance = new SpeechSynthesisUtterance(currentWord.german);
        
        // Force the system to select a German voice
        utterance.lang = 'de-DE'; 
        
        // Speak the word
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support text-to-speech!");
    }
});
