// Text to display word by word with line breaks
const text = [
    "Janmashtami, also known as Krishn Janmashtami or Gokulashtami,",
    "is a major Hindu festival celebrating the birth of Lord Krishn,",
    "the eighth avatar of Vishnu.",
    "According to Hindu mythology, Krishn was born to Devaki and Vasudeva in Mathura",
    "on the eighth day of the Krishn Paksha in the month of Bhadrapada.",
    "The festival is observed with deep devotion, involving fasting, singing devotional songs,",
    "reading scriptures like the Bhagavad Gita, and performing dances and dramas that depict Krishn's life and divine deeds.",
    "",
    "The spiritual significance of Janmashtami lies in celebrating Krishn as the embodiment of love,",
    "wisdom, and divine playfulness.",
    "His teachings in the Bhagavad Gita serve as a guiding light for millions of devotees.",
    "The festival includes various rituals and celebrations such as fasting until midnight, Dahi Handi events,",
    "and the performance of Ras Lila and Krishn Leela.",
    "Temples and homes are adorned with decorations,",
    "and the climax of the celebrations occurs at midnight,",
    "marking the divine birth with bhajans, mantras, and aarti.",
    "Janmashtami is a time for spiritual reflection, devotion, and a reaffirmation of the timeless values of love,",
    "righteousness, and the bond between the divine and the devotee."
];

const animatedTextElement = document.getElementById('animatedText');

let i = 0;

function displayWordByWord() {
    if (i < text.length) {
        const words = text[i].split(' ');
        let j = 0;
        function displayNextWord() {
            if (j < words.length) {
                animatedTextElement.innerHTML += words[j] + ' ';
                j++;
                setTimeout(displayNextWord, 100); // Adjust timing for word appearance
            } else {
                animatedTextElement.innerHTML += '<br>';
                i++;
                setTimeout(displayWordByWord, 500); // Adjust timing between lines
            }
        }
        displayNextWord();
    }
}

displayWordByWord();

// Greeting Button Functionality
document.getElementById('greetButton').addEventListener('click', function() {
    document.getElementById('greetingMessage').textContent = 'May the blessings of Krishn Ji be with you.';
});

// Play and Pause Button Functionality
document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('backgroundMusic');
    if (audio) {
        audio.play();
    }
});

document.getElementById('pauseButton').addEventListener('click', function() {
    var audio = document.getElementById('backgroundMusic');
    if (audio) {
        audio.pause();
    }
});
