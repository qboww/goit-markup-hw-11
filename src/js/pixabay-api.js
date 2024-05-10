export function getPhotos(query) {
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const baseUrl = 'https://pixabay.com/api';

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'portrait',
    safesearch: true,
  });

  return fetch(`${baseUrl}/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
