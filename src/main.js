import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = e.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({ 
      message: "Please enter a search term!", 
      position: "topRight",           
      class: "custom-toast custom-error"  
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query);
    if (images.length === 0) {
      iziToast.warning({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
        class: "custom-toast custom-warning"
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Try again later.",
      position: "topRight",
      class: "custom-toast custom-error"
    });
  } finally {
    hideLoader();
  }
});
