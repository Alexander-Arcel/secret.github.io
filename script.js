// 1. Music Control
function toggleMusic() {
    const song = document.getElementById("mySong");
    const btn = document.getElementById("musicBtn");
    if (!song || !btn) return; // Safety check

    if (song.paused) {
        song.play();
        btn.innerHTML = "Subtle ⏸ Pause Song";
    } else {
        song.pause();
        btn.innerHTML = "🎵 Play Song";
    }
}

// 2. Heart Rain (Runs on every page)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-shape');
    const symbols = ['❤️', '🌸', '✨', '💖', '🌷'];
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}
setInterval(createHeart, 300);

// 3. ADVANCED BLOOMING LOGIC (Only runs if .f-wrapper exists)
function initBlooming() {
    const wrapper = document.querySelector('.f-wrapper');
    if (!wrapper) return;

    for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div');
        petal.classList.add('f-petal');
        const angle = i * 45;
        petal.style.transform = `rotate(${angle}deg) rotateX(-20deg)`;
        petal.style.animation = `bloom 2s ease-out forwards`;
        petal.style.animationDelay = `${2.5 + (i * 0.2)}s`;
        wrapper.appendChild(petal);
    }
}

// 4. CLICKABLE IMAGE LOGIC (New - Only runs if #flower-img exists)
function setupImageLink() {
    const flowerImg = document.getElementById('flower-img');

    if (flowerImg) {
        flowerImg.addEventListener('click', () => {
            // This takes the user to the blooming animation page
            window.location.href = "flowerblooming.html";
        });
    }
}

// Initialize all page-specific features once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initBlooming();
    setupImageLink();
});




