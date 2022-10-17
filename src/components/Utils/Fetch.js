import PropTypes from 'prop-types';
import axios from 'axios';

export default function fetchApi (input, page){
const data = axios.get(`https://pixabay.com/api/?key=29206666-47f56dc34c806392fb43c0dc5&
q=${input}&page=${page}
&image_type=photo&orientation=horizontal&per_page=12`)

return data
}

fetchApi.propTypes = {
    input: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
  };