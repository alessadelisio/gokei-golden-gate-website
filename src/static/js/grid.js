import { loadImages } from './imageLoader.js';
import { createImageElement } from './imageElementCreator.js';

let currentPage = 1;
let isLoading = false;
let hasMoreImages = true;
let isAutoLoadEnabled = false;
let masonry;

document.addEventListener('DOMContentLoaded', function () {
    const grid = document.querySelector('.gokei-grid');
    const loadMoreButton = document.getElementById('load-more-button');

    loadMoreButton.classList.add('hidden');

    loadInitialImages(grid);

    loadMoreButton.addEventListener('click', () => {
        loadMoreImages(grid);
        enableAutoLoad();
    });

    window.addEventListener('scroll', () => {
        if (isAutoLoadEnabled && isNearBottom() && !isLoading && hasMoreImages) {
            loadMoreImages(grid);
        }
    });
});

function loadInitialImages(grid) {
    loadImages(currentPage)
        .then(images => {
            appendImagesToGrid(grid, images);
            initializeMasonry(grid);
            updateLoadMoreButton();
        });
}

function loadMoreImages(grid) {
    if (isLoading || !hasMoreImages) return;

    isLoading = true;
    currentPage++;

    loadImages(currentPage)
        .then(images => {
            if (images.length === 0) {
                hasMoreImages = false;
                updateLoadMoreButton();
                isLoading = false;
                return;
            }

            const newItems = appendImagesToGrid(grid, images);
            updateMasonry(grid, newItems);
            isLoading = false;
            if (!isAutoLoadEnabled) {
                updateLoadMoreButton();
            }
        });
}

function appendImagesToGrid(grid, images) {
    const newItems = [];
    images.forEach(imageData => {
        const gridItem = createImageElement(imageData);
        grid.appendChild(gridItem);
        newItems.push(gridItem);
    });
    return newItems;
}

function initializeMasonry(grid) {
    masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: 20
    });

    imagesLoaded(grid, function () {
        masonry.layout();
        grid.classList.add('loaded');
        grid.querySelectorAll('.grid-item').forEach(function (item) {
            item.classList.add('loaded');
        });
        // Show the button after the grid is loaded
        updateLoadMoreButton();
    });
}

function updateMasonry(grid, newItems) {
    imagesLoaded(grid, function () {
        masonry.appended(newItems);
        masonry.layout();
        newItems.forEach(item => {
            item.classList.add('loaded');
        });
    });
}

function isNearBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
}

function updateLoadMoreButton() {
    const button = document.getElementById('load-more-button');
    if (hasMoreImages && !isAutoLoadEnabled && document.querySelector('.gokei-grid.loaded')) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
}

function enableAutoLoad() {
    isAutoLoadEnabled = true;
    const button = document.getElementById('load-more-button');
    button.classList.add('hidden');
}
