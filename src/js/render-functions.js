import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function clearGallery() {
  gallery.innerHTML = "";
}

export function createGallery(images) {
  const markup = images.map(img => `
    <li class="gallery-item">
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" />
      </a>
      <div class="info">
        <p><span>Likes</span>${img.likes}</p>
        <p><span>Views</span>${img.views}</p>
        <p><span>Comments</span>${img.comments}</p>
        <p><span>Downloads</span>${img.downloads}</p>
      </div>
    </li>
  `).join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function showLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;
  loader.classList.add("show");  
}

export function hideLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;
  loader.classList.remove("show"); 
}
