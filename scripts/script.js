document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const cards = document.querySelectorAll(".projects-section .col-md-4");

    // Индексируем технологии в data-атрибуты
    cards.forEach(card => {
        const techs = [...card.querySelectorAll(".tech-badge")]
            .map(el => el.textContent.toLowerCase());
        card.dataset.tech = techs.join(" ");
    });

    // Обработчик кликов по кнопкам фильтров
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Снимаем активный класс со всех кнопок
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.textContent.trim().toLowerCase();

            cards.forEach(card => {
                const techs = card.dataset.tech.split(" "); // Массив технологий

                // Показываем все карточки, если фильтр "все" или "all"
                if (["все", "all"].includes(filter)) {
                    card.style.display = "block";
                }
                // Показываем карточку, если среди её технологий есть нужная
                else if (techs.includes(filter)) {
                    card.style.display = "block";
                }
                // Иначе скрываем
                else {
                    card.style.display = "none";
                }
            });
        });
    });
});
