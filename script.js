function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-shape');

    // Randomly choose between a heart and a flower
    const symbols = ['❤️', '🌸', '✨', '💖', '🌷'];
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    // Random animation duration
    const duration = Math.random() * 3 + 2; // Between 2s and 5s
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    // Remove heart after animation finishes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create a new heart every 300ms
setInterval(createHeart, 300);


