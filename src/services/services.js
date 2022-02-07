import axios from 'axios';

const API_KEY = '23825879-78d35eabdb1bf9c22a9a5e768';

async function findImages(searchValue, page) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  const pictures = await response.data;
  return pictures;
}

export default findImages;
