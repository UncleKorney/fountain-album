// Функция для появления секций на экране при прокрутке
const sections = document.querySelectorAll("section");
const options = {
    threshold: 0.5 // когда секция будет на 50% видна
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
