let currentPage = 1;
const pages = document.querySelectorAll('.page');
const bunny = document.getElementById('bunny');
const bunny2 = document.getElementById('bunny2');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const openLetterBtn = document.getElementById('openLetterBtn');
const letterContainer = document.getElementById('letterContainer');
const messageDiv = document.getElementById('message');
const proceedBtn = document.getElementById('proceedBtn');
const letterContent = document.getElementById('letterContent');
const letterContent2 = document.getElementById('letterContent2');
const marryYes = document.getElementById('marryYes');
const marryNo = document.getElementById('marryNo');
const proposalResult = document.getElementById('proposalResult');
const heartsContainer = document.getElementById('hearts-container');

// Proceed button to next page
proceedBtn.addEventListener('click', () => showPage(3));

// Create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.opacity = '1';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '2';
    heart.style.animation = `float-up ${Math.random() * 3 + 3}s ease-in forwards`;
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), (Math.random() * 3 + 3) * 1000);
}

// Create hearts periodically
setInterval(createFloatingHeart, 1500);

// Page 1: Yes/No Logic
yesBtn.addEventListener('click', () => showPage(2));
noBtn.addEventListener('click', () => {
    bunny.textContent = '😢';
    bunny.classList.add('sad');
    setTimeout(() => {
        bunny.textContent = '🐰';
        bunny.classList.remove('sad');
    }, 3000);
});

// Page 2: Open Letter Button
openLetterBtn.addEventListener('click', () => {
    openLetterBtn.style.display = 'none';
    bunny2.style.display = 'block';
    
    setTimeout(() => {
        letterContainer.style.display = 'block';
        setTimeout(() => {
            startTypewriter();
        }, 500);
    }, 1500);
});

function startTypewriter() {
    const text = `For My Dearest Rashi ❤️

Oh, my sweet Rashi, every morning I wake up with your beautiful face dancing in my mind, like the first ray of sunshine lighting up my world. You're the reason I smile before my eyes even open.

Throughout the day, my thoughts are filled with you – from the little things like how you twirl your hair when you're thinking, to the big dreams we have together. I can't live without you, Rashi; you're the air I breathe, the song in my heart.

As the sun sets and night falls, you're still on my mind, my last thought before I drift off to sleep. I dream of holding you close, of our adventures, and of a future where we're always together. You're my forever, my love.

Rashi, you're not just my love; you're my best friend, my confidant, and the one who makes life feel like a beautiful fairy tale. Every day with you is a treasure.

Forever yours with all my love,
Your Valentine 🌹`;
    
    messageDiv.classList.add('active');
    messageDiv.textContent = '';
    typeWriter(text, 0);
}

function typeWriter(text, i) {
    if (i < text.length) {
        messageDiv.textContent += text[i];
        messageDiv.scrollTop = messageDiv.scrollHeight;
        setTimeout(() => typeWriter(text, i + 1), 30);
    } else {
        // Show proceed button instead of auto-advancing
        proceedBtn.style.display = 'block';
        proceedBtn.classList.add('fade-in');
    }
}

// Envelope Letters Content
const letterContents = {
    1: `<h2>Emotions Those i cant Express properly💔</h2><p>My dearest Rashi, in the quiet moments when the world fades away, I feel the depth of my love for you like a river carving through stone. Your touch heals my soul, your smile mends my heart. Without you, I'm lost in a storm; with you, I'm home. I love you with every tear I've cried and every joy I've felt.</p><p class="signature">Forever yours,<br>Your Valentine ❤️</p>`,
  2: `<h2>My Reason for Happiness 😊</h2><p>Rashi, my sunshine! Life with you is a nonstop adventure of laughter and joy. Remember our silly dances and midnight talks? You're my partner in crime, my forever giggle buddy. I can't wait for more happy memories – you're my happiness! Every moment with you feels like a celebration.</p><p class="signature">Yours in joy,<br>Your Valentine 💖</p>`,
    3: `<h2>Scared to Lose You 😢</h2><p>Rashi, the thought of losing you terrifies me like nothing else. You're my anchor in this chaotic world. Promise me we'll always hold on tight – I need you more than words can express. You're not just my love; you're my reason for everything. Forever scared but forever yours.</p><p class="signature">Desperately yours,<br>Your Valentine 💞</p>`,
    4: `<h2>Passionate Love Letter 🔥</h2><p>Oh Rashi, my heart aches with the beauty of loving you. Every memory we share is etched in my soul. You're the poetry in my life, the melody I hum. I love you deeply, passionately, eternally. When I look into your eyes, I see my forever. You complete me in ways words can never express.</p><p class="signature">Passionately yours,<br>Your Valentine 🌹</p>`,
    5: `<h2>Future Dreams Letter 🎁</h2><p>Hey Rashi! Let's keep the fun going – picnics, surprises, endless smiles and adventures. You're my joy, my light, my everything fun. I love you with all the happiness in the world! I dream of a lifetime of laughter with you, building memories that will last forever.</p><p class="signature">Optimistically yours,<br>Your Valentine 🎉</p>`,
    6: `<h2>Forever Commitment Letter ✨</h2><p>Rashi, I want to spend every sunrise, every moment, every breath with you. You're my everything – my world, my love, my reason. I promise to love you unconditionally, to stand by you always, and to make every day special. You're the best thing that ever happened to me.</p><p class="signature">Forever your love,<br>Your Valentine 💫</p>`
};

// Get all envelope cards
const envelopeCards = document.querySelectorAll('.envelope-card');
const nextBtn3 = document.getElementById('nextBtn3');
const nextBtn4 = document.getElementById('nextBtn4');

// Next button listeners
nextBtn3.addEventListener('click', () => showPage(4));
nextBtn4.addEventListener('click', () => showPage(5));

envelopeCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (card.classList.contains('opened')) return; // Already opened
        
        card.classList.add('opened');
        const letterNum = card.dataset.letter;
        const letterDiv = card.querySelector('.envelope-letter');
        
        // Populate letter content
        letterDiv.innerHTML = letterContents[letterNum];
        letterDiv.classList.add('show-letter');
        
        // Animate envelope away
        const front = card.querySelector('.envelope-front');
        front.classList.add('fade-out');
        
        // Show next button when all letters on page 3 are opened
        if (currentPage === 3) {
            const allOpened = document.querySelectorAll('#page3 .envelope-card.opened').length;
            if (allOpened === 3) {
                nextBtn3.style.display = 'block';
                nextBtn3.classList.add('fade-in');
            }
        }
        
        // Show next button when all letters on page 4 are opened
        if (currentPage === 4) {
            const allOpened = document.querySelectorAll('#page4 .envelope-card.opened').length;
            if (allOpened === 3) {
                nextBtn4.style.display = 'block';
                nextBtn4.classList.add('fade-in');
            }
        }
    });
});

// Page 5: Marriage Proposal
const photoGallery = document.getElementById('photoGallery');

marryYes.addEventListener('click', () => {
    proposalResult.innerHTML = '<p>Yes! I love you forever! 💍❤️🎉</p>';
    proposalResult.style.display = 'block';
    proposalResult.classList.add('fade-in');
    
    // Show photo gallery after 1 second
    setTimeout(() => {
        photoGallery.style.display = 'block';
    }, 1000);
});

marryNo.addEventListener('click', () => {
    proposalResult.innerHTML = '<p>Aww, but I\'ll keep loving you anyway! 😘</p>';
    proposalResult.style.display = 'block';
    proposalResult.classList.add('fade-in');
});

function showPage(pageNum) {
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(`page${pageNum}`).classList.add('active');
    currentPage = pageNum;
}
