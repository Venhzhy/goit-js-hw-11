import axios from "axios";

const API_KEY = "52370866-f56fe6e7c04694f1b916d2ffa";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data.hits;
  } catch (error) {
    throw new Error("Error fetching images: " + error.message);
  }
}
