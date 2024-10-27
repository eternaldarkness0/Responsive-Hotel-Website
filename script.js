const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const isActive = navLinks.classList.contains('active');
    menuBtnIcon.setAttribute('class', isActive ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');

    menuBtnIcon.setAttribute('class', 'ri-menu-line');
})

const options = {
    distance: '60px',
    origin: 'bottom',
    duration: 1000,
};

ScrollReveal().reveal('.header-container p', {
    ...options,
    duration: 700,
});

ScrollReveal().reveal('.header-container h1', {
    ...options,
    delay: 400,
    duration: 700,
});

ScrollReveal().reveal('.about-image img', {
    ...options,
    origin: 'left',
});

ScrollReveal().reveal('.about-content .section-subheader', {
    ...options,
    delay: 300,
});

ScrollReveal().reveal('.about-content .section-header', {
    ...options,
    delay: 450,
});

ScrollReveal().reveal('.about-content .section-description', {
    ...options,
    delay: 650,
});

ScrollReveal().reveal('.about-content .about-btn', {
    ...options,
    delay: 850,
});

ScrollReveal().reveal('.room-container .section-subheader', {
    ...options,
    delay: 200,
});

ScrollReveal().reveal('.room-container .section-header', {
    ...options,
    delay: 500,
});

ScrollReveal().reveal('.room-card', {
    ...options,
    delay: 750,
    interval: 350,
});

ScrollReveal().reveal('.service-container li', {
    ...options,
    origin: 'right',
    interval: 250,
});

ScrollReveal().reveal('.explore .section-subheader', {
    ...options,
});

ScrollReveal().reveal('.explore .section-header', {
    ...options,
    delay: 400,
});

ScrollReveal().reveal('.explore .explore-content', {
    ...options,
    origin: 'left',
    delay: 600,
});


let nums = document.querySelectorAll('.num');
let container = document.querySelector('.banner-content');
let animated = false;

window.addEventListener('scroll', () => {
    const rect = container.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
        if(!animated) {
            nums.forEach((event) => {
                let start = 0;
                let end = Number(event.dataset.num);
                let count = setInterval(() => {
                    start++;
                    event.textContent = start + '+';
                    if (start >= end) {
                        clearInterval(count);
                        event.textContent = end + '+';
                    }
                }, 1000 / end);
            });
            animated = true;
        }
    }
});
