export function createImageElement(imageData) {
    // Dynamic placeholder to contain all the fetched images.
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    // Dynamic placeholder to contain the Golden Gate (nth) image.
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    // Dynamic image, from the 'imageData' parameter.
    const img = document.createElement('img');
    img.src = imageData.url;
    img.alt = imageData.alt;
    img.className = 'img-fluid';

    const topLeftIcon = createTopLeftIcon();
    const bottomLeftIcon = createBottomLeftIcon(imageData.author);

    imageContainer.appendChild(img);
    imageContainer.appendChild(topLeftIcon);
    imageContainer.appendChild(bottomLeftIcon);

    gridItem.appendChild(imageContainer);
    gridItem.appendChild(createTagsContainer(imageData.tags));

    return gridItem;
}

function createTopLeftIcon() {
    // Dynamic placeholder for the top left icon (Gokei's logo).
    const topLeftIcon = document.createElement('div');
    topLeftIcon.className = 'hover-icon top-left';
    topLeftIcon.innerHTML = '<img src="/static/assets/img/favicon.ico" alt="Gokei\'s logo" class="img-fluid">';

    return topLeftIcon;
}

function createBottomLeftIcon(author) {
    // Dynamic placeholder for the bottom left icon (profile pic + username).
    const bottomLeftIcon = document.createElement('div');
    bottomLeftIcon.className = 'hover-icon bottom-left';

    // Dynamic placeholder to contain the image's author info.
    const authorInfo = document.createElement('div');
    authorInfo.className = 'author-info';

    // Dynamic image with the author's profile pic.
    const authorImage = document.createElement('img');
    authorImage.src = author.profile_image;
    authorImage.alt = `${author.name}'s profile picture`;
    authorImage.className = 'author-image';

    // Dynamic placeholder to contain the author's name and Twitter username.
    const authorTextInfo = document.createElement('div');
    authorTextInfo.className = 'author-text-info';

    // Dynamic placeholder contained by the 'authorTextInfo' section.
    const authorName = document.createElement('div');
    authorName.className = 'author-name';
    authorName.textContent = author.name;

    // Dynamic placeholder contained by the 'authorTextInfo' section.
    const authorTwitter = document.createElement('div');
    authorTwitter.className = 'author-twitter';

    // Anchor tag to redirect to the author's Twitter profile.
    if (author.twitter_username) {
        authorTwitter.innerHTML = `<a href="https://twitter.com/${author.twitter_username}" target="_blank">@${author.twitter_username}</a>`;
    } else {
        authorTwitter.textContent = 'Unknown Twitter account';
    }

    authorTextInfo.appendChild(authorName);
    authorTextInfo.appendChild(authorTwitter);

    authorInfo.appendChild(authorImage);
    authorInfo.appendChild(authorTextInfo);

    bottomLeftIcon.appendChild(authorInfo);

    return bottomLeftIcon;
}

function createTagsContainer(tags) {
    // Dynamic placeholder to contain the Golden Gate (nth) image tags.
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'tags-container';

    tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });

    return tagsContainer;
}
