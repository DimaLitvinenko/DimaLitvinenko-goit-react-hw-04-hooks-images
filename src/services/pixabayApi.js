import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24448701-489f6770e4002eca234b0d01a';

export default function fetchImages(searchQuery, page) {
   const searchParams = new URLSearchParams({
      key: API_KEY,
      orientation: 'horizontal',
      image_type: 'photo',
      q: searchQuery,
      page: page,
      per_page: 12,
   });

   return fetch(`${BASE_URL}?${searchParams}`);
}

fetchImages.propTypes = {
   searchQuery: PropTypes.string,
   page: PropTypes.number,
};
