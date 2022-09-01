// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

gallery.innerHTML = createGallery(galleryItems);
createGalleryLightbox();

function createGallery(items) {
  return items.reduce((acc, item) =>
    acc += `<a class="gallery__item" href="${item.original}">
              <img
                class="gallery__image"
                src="${item.preview}"
                alt="${item.description}"
              />
            </a>`, "");
};

function createGalleryLightbox() {

  const galleryLightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
  });
}
