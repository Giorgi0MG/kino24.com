document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');

    items.forEach(item => {
        const descriptionText = item.getAttribute('data-description');
        if (descriptionText) {
            const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = descriptionText;
            item.appendChild(description);
        }
    });

    const carousel = document.querySelector('#carousel-items');
    let isScrolling = true;

    function scrollCarousel() {
        if (isScrolling) {
            const firstItem = carousel.querySelector('.carousel-item:first-child');
            carousel.appendChild(firstItem);
        }
    }

    setInterval(scrollCarousel, 3000); // ავტომატური სქროლი ყოველ 3 წამში
});
