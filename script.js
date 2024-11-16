document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    
    function checkSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
                section.style.opacity = '1';
            }
        });
    }

    window.addEventListener('scroll', checkSections);
    checkSections();
});
