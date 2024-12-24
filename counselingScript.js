
window.addEventListener('scroll', function() {
    const counselingSection = document.getElementById('counseling');
    const bookingSection = document.getElementById('booking');

    const sectionTop = counselingSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (sectionTop < screenPosition) {
        bookingSection.classList.add('show');
    } else {
        bookingSection.classList.remove('show');
    }
});
