// Функция для появления секций на экране при прокрутке
const sections = document.querySelectorAll("section");
const options = {
    threshold: 0.5 // когда секция будет на 50% видна
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("fade-in");
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Автоматическое переключение треков
const tracks = document.querySelectorAll('.track');
let currentTrackIndex = 0;
const audioElements = document.querySelectorAll('audio');

// Когда трек заканчивается, переключаемся на следующий
audioElements.forEach((audio, index) => {
    audio.addEventListener('ended', () => {
        if (index + 1 < audioElements.length) {
            audioElements[index + 1].play();
            tracks[index + 1].scrollIntoView({ behavior: 'smooth' });
        }
    });
});
