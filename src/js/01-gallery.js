import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

const imageEl = galleryItems
  .map(
    ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', imageEl);
gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: `250`,
});
