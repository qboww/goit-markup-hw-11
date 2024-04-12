export function createGallaryMarkup(array) {
  return array
    .map(
      image =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img class="gallery-image" src="${image.largeImageURL}" alt="${image.largeImageURL}">
        </a>
      </li>`
    )
    .join('');
}
