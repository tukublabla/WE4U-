document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

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

});
