// scripts.js
function playSound(event) {
    let keyCode;
    
    if (event.type === 'keydown') {
        keyCode = event.keyCode;
    } else if (event.type === 'click') {
        keyCode = event.target.getAttribute('data-key');
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.drum[data-key="${keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

const drums = document.querySelectorAll('.drum');
drums.forEach(drum => drum.addEventListener('click', playSound));
window.addEventListener('keydown', playSound);
drums.forEach(drum => drum.addEventListener('transitionend', removeTransition));

// Add audio elements dynamically
const sounds = [
    { key: '65', sound: 'sounds/clap.wav' },
    { key: '83', sound: 'sounds/hihat.wav' },
    { key: '68', sound: 'sounds/kick.wav' },
    { key: '70', sound: 'sounds/openhat.wav' },
    { key: '71', sound: 'sounds/boom.wav' },
    { key: '72', sound: 'sounds/ride.wav' },
    { key: '74', sound: 'sounds/snare.wav' },
    { key: '75', sound: 'sounds/tom.wav' },
    { key: '76', sound: 'sounds/tink.wav' },
];

sounds.forEach(({ key, sound }) => {
    const audio = document.createElement('audio');
    audio.setAttribute('data-key', key);
    audio.src = sound;
    document.body.appendChild(audio);
});