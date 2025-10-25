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

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const commentInput = document.getElementById('commentInput');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      // Очистка состояния
      [nameInput, emailInput].forEach(input => input.classList.remove('is-invalid'));
      successMessage.classList.add('d-none');

      // Проверка имени
      if (nameInput.value.trim().length < 2) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      }

      // Проверка email
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      }

      // Если форма валидна
      if (isValid) {
        successMessage.classList.remove('d-none');
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';
      }
    });

    // Скрываем ошибку при вводе
    document.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
      });
    });
  } 
});
