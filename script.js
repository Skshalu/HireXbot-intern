// Carousel Functionality
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let current = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

prevButton.addEventListener('click', () => {
    current = (current === 0) ? testimonials.length - 1 : current - 1;
    showTestimonial(current);
});

nextButton.addEventListener('click', () => {
    current = (current === testimonials.length - 1) ? 0 : current + 1;
    showTestimonial(current);
});

// Initialize carousel
showTestimonial(current);
