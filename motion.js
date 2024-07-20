import './slider.css'


document.querySelectorAll('.slider-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('i'), { scale: 1.3, duration: 0.3 });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('i'), { scale: 1, duration: 0.3 });
    });
});