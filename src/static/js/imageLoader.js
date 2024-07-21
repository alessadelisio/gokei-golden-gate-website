export function loadImages() {
    return fetch('/get_images')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching images:', error);
            return [];
        });
}