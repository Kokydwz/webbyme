let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    slideIndex += step;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // تحريك الـ slider عند النقر
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
