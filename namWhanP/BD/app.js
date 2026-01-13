// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Create confetti
function createConfetti() {
    const colors = ['#ff6b9d', '#c471ed', '#12c2e9', '#ffd700', '#f093fb'];
    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
    }
}

// Start celebration
function startCelebration() {
    createConfetti();
    document.getElementById('welcomeSection').classList.add('hidden');
    document.getElementById('cakeSection').classList.remove('hidden');

    // Smooth scroll to cake section
    setTimeout(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }, 300);
}

// Blow candle
let blownCandles = 0;
const totalCandles = 5;

function blowCandle(candle) {
    if (!candle.classList.contains('blown')) {
        candle.classList.add('blown');
        blownCandles++;

        // Play blow sound effect (visual feedback)
        candle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            candle.style.transform = 'scale(1)';
        }, 200);

        if (blownCandles === totalCandles) {
            setTimeout(() => {
                showWishMessage();
            }, 500);
        }
    }
}

// Show wish message
function showWishMessage() {
    const wishMessage = document.getElementById('wishMessage');
    wishMessage.classList.add('show');

    // Create more confetti
    createConfetti();

    // Show message section after delay
    setTimeout(() => {
        document.getElementById('messageSection').classList.remove('hidden');
        window.scrollTo({
            top: window.innerHeight * 2,
            behavior: 'smooth'
        });
    }, 2000);
}

// Update scroll indicator visibility
function updateScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight - 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '0.7';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    window.addEventListener('scroll', updateScrollIndicator);
});

// Smooth scroll on indicator click
document.getElementById('scrollIndicator').addEventListener('click', () => {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const nextSection = Math.ceil(currentScroll / windowHeight) * windowHeight;

    window.scrollTo({
        top: nextSection,
        behavior: 'smooth'
    });
});
