export function createGallaryMarkup(array) {
  return array
    .map(
      image =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${image.urls.small}">
          <img class="gallery-image" src="${image.urls.small}" alt="${image.description}">
        </a>
      </li>`
    )
    .join('');
}
