import axios from 'axios';
const RijksmuseumApi = function () {
  this.saveOnStorage = (data) => {
    localStorage.setItem('collectionData', JSON.stringify(data));
  };

  this.cleanCollectionStorage = () => {
    localStorage.removeItem('collectionData');
  };

  this.getFromStorage = () => {
    const data = localStorage.getItem('collectionData');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  };
};

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}/nl`,
});

api.interceptors.request.use(
  function (config) {
    config.params['key'] = process.env.REACT_APP_API_KEY;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { RijksmuseumApi };

export default api;
