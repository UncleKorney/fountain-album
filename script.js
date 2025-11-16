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

// Прокрутка до текущего трека
document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio('audio/track1.mp3'); // Путь к первому треку
    audio.loop = true;

    // Добавляем проигрывание при загрузке страницы
    audio.play().then(() => {
        console.log("Музыка начала играть!");
    }).catch((error) => {
        console.log("Ошибка при запуске музыки: ", error);
    });
});

// Добавление фона с трещинами
const crackElement = document.createElement("div");
crackElement.classList.add("crack");
document.body.appendChild(crackElement);

// Функция для анимации движения воды
function createWaterAnimation() {
    const waterElement = document.createElement("div");
    waterElement.classList.add("water");
    document.body.appendChild(waterElement);
}
createWaterAnimation();

// Функция для движения крыс
function createRatMovement() {
    const ratElement = document.createElement("div");
    ratElement.classList.add("rat");
    ratElement.style.left = `${Math.random() * 100}%`; // Случайное начальное положение
    ratElement.style.top = `${Math.random() * 100}%`; // Случайное начальное положение
    document.body.appendChild(ratElement);
}

// Генерация случайных крыс
for (let i = 0; i < 5; i++) {
    createRatMovement();
}

// Функция для неонового мигания на заголовках
function applyNeonEffect() {
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
        title.classList.add('neon-light');
    });
}
applyNeonEffect();

// Добавление символа крысиным королём в футер
const ratKingSymbol = document.createElement("img");
ratKingSymbol.src = "images/rat-king-symbol.png"; // Путь к изображению символа
ratKingSymbol.alt = "Rat King Symbol";
ratKingSymbol.classList.add("rat-king-symbol");
document.body.appendChild(ratKingSymbol);

// Плавная прокрутка к каждому новому треку
function scrollToTrack(index) {
    tracks[index].scrollIntoView({ behavior: 'smooth' });
}

// Воспроизведение треков при загрузке
function playTrackOnLoad() {
    const audio = new Audio('audio/track1.mp3'); // Путь к первому треку
    audio.loop = true;

    // Добавляем проигрывание при загрузке страницы
    audio.play().then(() => {
        console.log("Музыка начала играть!");
    }).catch((error) => {
        console.log("Ошибка при запуске музыки: ", error);
    });
}

// Включение первого трека при загрузке
document.addEventListener("DOMContentLoaded", function() {
    playTrackOnLoad();
});
