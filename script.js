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

// Функция для воспроизведения треков
let audio = new Audio();
let currentTrackIndex = 0; // Индекс текущего трека
const tracks = document.querySelectorAll('.track'); // Список всех треков
const trackFiles = ['audio/track1.mp3', 'audio/track2.mp3', 'audio/track3.mp3']; // Пути к трекам

// Воспроизведение музыки по клику на страницу
document.body.addEventListener('click', () => {
    if (!audio.src) { // Если аудио еще не загружено, загружаем первый трек
        audio.src = trackFiles[currentTrackIndex];
        audio.play().then(() => {
            console.log("Музыка начала играть!");
        }).catch((error) => {
            console.log("Ошибка при запуске музыки: ", error);
        });
    }
});

// Когда трек заканчивается, переключаемся на следующий
audio.addEventListener('ended', () => {
    currentTrackIndex++;

    // Если мы дошли до конца треков, начинаем сначала
    if (currentTrackIndex >= trackFiles.length) {
        currentTrackIndex = 0;
    }

    // Переключаем трек и начинаем его воспроизведение
    audio.src = trackFiles[currentTrackIndex];
    audio.play().then(() => {
        console.log(`Играет трек ${currentTrackIndex + 1}`);
    }).catch((error) => {
        console.log("Ошибка при воспроизведении трека: ", error);
    });

    // Прокрутка к новому треку
    tracks[currentTrackIndex].scrollIntoView({ behavior: 'smooth' });
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

// Отображение обложки альбома
function displayAlbumCover() {
    const albumCover = document.createElement("div");
    albumCover.classList.add("album-cover");
    albumCover.style.backgroundImage = 'url("images/album-cover.jpg")'; // Путь к обложке альбома
    albumCover.style.backgroundSize = 'cover';
    albumCover.style.backgroundPosition = 'center';
    albumCover.style.width = '100%';
    albumCover.style.height = '300px';
    document.body.appendChild(albumCover);
}
displayAlbumCover();

// Обработчик для отображения заголовков треков с плавным появлением
function showTrackTitles() {
    const trackTitles = document.querySelectorAll('.track');
    trackTitles.forEach((track, index) => {
        setTimeout(() => {
            track.classList.add("visible");
        }, index * 500); // Задержка для появления треков
    });
}
showTrackTitles();
