export function getPhotos(query) {
  const API_KEY = 'sjjAXzd3zTnGtsxie_NxE7xY8U10V--ubX_i4yWzanA';
  const baseUrl = 'https://api.unsplash.com';
  const endPoint = '/search/photos';

  const params = new URLSearchParams({
    client_id: API_KEY,
    query,
    orientation: 'portrait',
  });

  return fetch(`${baseUrl}${endPoint}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
