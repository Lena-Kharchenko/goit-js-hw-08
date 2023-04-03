import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

const listItem = document.querySelector('.gallery');

const imgList = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  })
  .join(' ');

listItem.insertAdjacentHTML('afterbegin', imgList);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
// import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// // Change code below this line

// const galleryEl = document.querySelector('.gallery');

// const galeryMarkUp = galleryItems
//   .map(({ description, original, preview }) => {
//     return `
//         <a class="gallery__item" href="${original}">
//             <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
//         </a>
//     `;
//   })
//   .join(' ');

// galleryEl.insertAdjacentHTML('afterbegin', galeryMarkUp);

// var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
