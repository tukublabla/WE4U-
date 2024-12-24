document.querySelectorAll('.flip-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        document.querySelector('.flip-content').classList.toggle('flipped');
    });
});
