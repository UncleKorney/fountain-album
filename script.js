document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.5 // когда секция будет на 50% видна
    };

    // Инициализация IntersectionObserver для анимации секций
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

    // Воспроизведение музыки по клику на страницу
    const tracks = document.querySelectorAll('.track');
    const playPauseBtns = document.querySelectorAll('.play-pause-btn');
    const progressBars = document.querySelectorAll('.progress-bar');

    playPauseBtns.forEach((button, index) => {
        const audio = tracks[index].querySelector('audio');
        button.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                button.textContent = '⏸️'; // Изменение на паузу
                updateProgressBar(audio, progressBars[index]);
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

    // Функции анимации
    function createWaterAnimation() {
        const waterElement = document.createElement("div");
        waterElement.classList.add("water");
        document.body.appendChild(waterElement);
    }

    // Добавление фоновой анимации воды
    createWaterAnimation();

    // Добавление фона с трещинами
    const crackElement = document.createElement("div");
    crackElement.classList.add("crack");
    document.body.appendChild(crackElement);

    // Добавление анимации для крыс
    function createRatAnimation() {
        const ratElement = document.createElement("div");
        ratElement.classList.add("rat");
        ratElement.style.left = `${Math.random() * 100}%`; // Начальная позиция
        ratElement.style.top = `${Math.random() * 100}%`; // Начальная позиция
        ratElement.style.animationDuration = `${Math.random() * 10 + 10}s`; // Случайная скорость
        ratElement.style.animationName = "move-rat";
        document.body.appendChild(ratElement);
    }

    // Динамичное создание крыс
    setInterval(createRatAnimation, 3000); // Новая крыса каждые 3 секунды

});
