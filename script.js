function showSection(sectionId) {
    const sections = document.getElementsByClassName('page-section');
    for (let section of sections) {
        section.classList.remove('active');
    }
    document.getElementById(sectionId).classList.add('active');
    const navLinks = document.getElementsByClassName('nav-link');
    for (let link of navLinks) {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    }
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        navbarToggler.click();
    }
}

window.onload = function() {
    showSection('home');
};

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-ar], [data-de]');
    const langToggle = document.getElementById('langText');
    const currentLang = langToggle.textContent === 'DE' ? 'de' : 'ar';
    const newLang = currentLang === 'ar' ? 'de' : 'ar';

    elements.forEach(el => {
        const text = el.getAttribute(`data-${newLang}`);
        if (text) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
                el.placeholder = text;
            } else if (el.className !== 'hero-title-img') {
                el.textContent = text;
            }
        }
    });

    langToggle.textContent = newLang.toUpperCase();
}

window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});