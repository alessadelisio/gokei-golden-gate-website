import { loadImages } from './imageLoader.js';
import { createImageElement } from './imageElementCreator.js';

document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.gokei-grid');

    loadImages()
        .then(images => {
            images.forEach(imageData => {
                const gridItem = createImageElement(imageData);
                grid.appendChild(gridItem);
            });

            initializeMasonry(grid);
        });
});

function initializeMasonry(grid) {
    imagesLoaded(grid, function () {
        let masonry = new Masonry(grid, {
            itemSelector: '.grid-item',
            percentPosition: true,
            gutter: 20
        });

        setTimeout(function () {
            grid.classList.add('loaded');
            grid.querySelectorAll('.grid-item').forEach(function (item) {
                item.classList.add('loaded');
            });
        }, 100);
    });
}
