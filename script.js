document.addEventListener('DOMContentLoaded', function() {
    const playPauseBtns = document.querySelectorAll('.play-pause-btn');
    const progressBars = document.querySelectorAll('.progress-bar');

    playPauseBtns.forEach((button) => {
        const trackNumber = button.getAttribute('data-track');
        const audio = document.querySelector(`#track1-${trackNumber} audio`);

        button.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                button.textContent = '⏸️'; // Изменение на паузу
                updateProgressBar(audio, progressBars[trackNumber - 1]);
            } else {
                audio.pause();
                button.textContent = '▶️'; // Изменение на воспроизведение
            }
        });
    });

    function updateProgressBar(audio, progressBar) {
        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
        });

        progressBar.addEventListener('input', () => {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        });
    }
});
