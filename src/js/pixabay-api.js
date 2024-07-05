export function searchPhoto(query) {
    const BASE_URL = 'https://pixabay.com/';
    const END_POINT = 'api/';
    const params = new URLSearchParams({
      key: '44781796-6abec62313abc8f45b7def348',
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
  
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        return data.hits;
      });
  }