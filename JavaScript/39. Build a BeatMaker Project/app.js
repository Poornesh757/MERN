class BeatMaker {
    constructor() {
        this.pads = document.querySelectorAll('.pad');
        this.playButton = document.querySelector('#play');
        this.stopButton = document.querySelector('#stop');
        this.tempoSlider = document.querySelector('#tempo');
        this.currentTempo = 120;
        this.isPlaying = null;
        this.index = 0;
        this.bpm = this.currentTempo;
        this.sounds = {
            kick: new Audio('sounds/kick.wav'),
            snare: new Audio('sounds/snare.wav'),
            hihat: new Audio('sounds/hihat.wav'),
            clap: new Audio('sounds/clap.wav')
        };
    }

    activatePad() {
        this.classList.toggle('active');
    }

    repeat() {
        let step = this.index % 8;
        const activePads = document.querySelectorAll(`.pad:nth-child(${step + 1})`);
        activePads.forEach(pad => {
            if (pad.classList.contains('active')) {
                this.sounds[pad.dataset.sound].currentTime = 0;
                this.sounds[pad.dataset.sound].play();
            }
        });
        this.index++;
    }

    start() {
        const interval = (60 / this.bpm) * 1000;
        if (!this.isPlaying) {
            this.isPlaying = setInterval(() => {
                this.repeat();
            }, interval);
        }
    }

    stop() {
        clearInterval(this.isPlaying);
        this.isPlaying = null;
        this.index = 0;
    }

    updateTempo(e) {
        this.bpm = e.target.value;
        clearInterval(this.isPlaying);
        this.isPlaying = null;
        if (this.playButton.classList.contains('active')) {
            this.start();
        }
    }

    init() {
        this.pads.forEach(pad => {
            pad.addEventListener('click', this.activatePad);
        });

        this.playButton.addEventListener('click', () => {
            this.playButton.classList.toggle('active');
            if (this.playButton.classList.contains('active')) {
                this.start();
                this.playButton.textContent = 'Pause';
            } else {
                this.stop();
                this.playButton.textContent = 'Play';
            }
        });

        this.stopButton.addEventListener('click', () => {
            this.stop();
            this.playButton.classList.remove('active');
            this.playButton.textContent = 'Play';
        });

        this.tempoSlider.addEventListener('input', (e) => {
            document.querySelector('label[for="tempo"]').textContent = `Tempo: ${e.target.value}`;
            this.updateTempo(e);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const beatMaker = new BeatMaker();
    beatMaker.init();
});
