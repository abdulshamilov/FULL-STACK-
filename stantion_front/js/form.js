document.addEventListener("DOMContentLoaded", function() {
    // Первая кнопка
    const openFormButton = document.getElementById("openForm");
    
    // Вторая кнопка
    const openFormButtonAlt = document.getElementById("openFormAlt");

    const closeFormButton = document.getElementById("closeForm");
    const modal = document.getElementById("modal");

    // Открытие формы для первой кнопки
    openFormButton.addEventListener("click", function() {
        modal.classList.add("open");  // Добавляем класс для отображения
        document.body.style.overflow = "hidden"; // Запрет прокрутки фона
    });

    // Открытие формы для второй кнопки
    openFormButtonAlt.addEventListener("click", function() {
        modal.classList.add("open");  // Добавляем класс для отображения
        document.body.style.overflow = "hidden"; // Запрет прокрутки фона
    });

    // Закрытие формы
    closeFormButton.addEventListener("click", function() {
        modal.classList.remove("open");  // Убираем класс, чтобы скрыть
        document.body.style.overflow = "auto"; // Разрешаем прокрутку
    });

    // Закрытие при клике вне формы
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("open");
            document.body.style.overflow = "auto";
        }
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
