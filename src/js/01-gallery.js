// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
function createGallery(arr) {
  return arr
    .map(
      (i) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${i.original}">
            <img class="gallery__image" src="${i.preview}" alt="${i.description}" />
          </a>
        </li>
        `
    )
    .join("");
}

gallery.innerHTML = createGallery(galleryItems);

let lightbox = new SimpleLightbox(".gallery a");
