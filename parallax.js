const parallaxContainer = document.querySelector('.parallax');
const layers = Array.from(document.querySelectorAll('.parallax-layer'));

parallaxContainer.addEventListener('mousemove', (e) => {
    const initialX = (window.innerWidth / 2 - e.pageX) / 40;
    const initialY = (window.innerHeight / 2 - e.pageY) / 40;

    layers.forEach((layer, index) => {
        const divider = index / 100;
        const positionX = initialX * divider;
        const positionY = initialY * divider;

        layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
});
