import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '2f482695fd390b2d1e6e8e5c0e34e037', 
  },
});

export default apiClient;
