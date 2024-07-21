/**
 * This script is used to initialize a 'masonry' grid layout.
 */

document.addEventListener('DOMContentLoaded', function () {
    let grid = document.querySelector('.gokei-grid');
    let items = grid.querySelectorAll('.grid-item');

    imagesLoaded(grid, function () {
        let masonry = new Masonry(grid, {
            itemSelector: '.grid-item',
            percentPosition: true,
            gutter: 20
        });

        setTimeout(function () {
            grid.classList.add('loaded');
            items.forEach(function (item) {
                item.classList.add('loaded');
            });
        }, 100);
    });
});
