document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    function updateSlider() {
        const translateValue = -currentIndex * 100 + "%";
        slider.style.transform = "translateX(" + translateValue + ")";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % (slider.children.length - 2); // Adjust the -2 based on the number of slides
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slider.children.length - 2) % (slider.children.length - 2); // Adjust the -2 based on the number of slides
        updateSlider();
    }

    setInterval(nextSlide, 3000); // Adjust the interval as needed
});
