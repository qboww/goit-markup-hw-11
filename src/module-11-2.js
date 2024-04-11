import { list, form } from './js/refs.js';
import { getPhotos } from './js/unsplash-api.js';
import { createGallaryMarkup } from './js/createMarkup.js';
import { showLoader, hiddeLoader } from './js/loader.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.search.value.trim();
  showLoader();
  list.innerHTML = '';

  getPhotos(searchQuery)
    .then(res => {
      if (res.results.length === 0) {
        return iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      list.innerHTML = createGallaryMarkup(res.results);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hiddeLoader();
    });
}

new SimpleLightbox('.gallery a', {
  caption: true,
  captionDelay: 250,
});