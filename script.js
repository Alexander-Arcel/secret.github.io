// Function to play/pause music
function toggleMusic() {
    const song = document.getElementById("mySong");
    const btn = document.getElementById("musicBtn");

    if (song.paused) {
        song.play();
        btn.innerHTML = "⏸ Pause Song";
    } else {
        song.pause();
        btn.innerHTML = "🎵 Play Song";
    }
}

// Your existing heart animation
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




