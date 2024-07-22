export function loadImages(page = 1, perPage = 30) {
    return fetch(`/get_images?page=${page}&per_page=${perPage}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching images:', error);
            return [];
        });
}